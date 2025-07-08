import Form from "../models/form.models.js";
import User from "../models/user.models.js";

export const forms = async (req, res) => {
    const {name, profession, income, email} = req.body;
     
    try{
        const user = await User.findOne({ email });
        console.log("Received:", { name, profession, income }); 

        if(!user){
            return  res.status(404).json({message: "User not found"});
        }
        
        if(!name || !profession || !income){
            return res.status(400).json({message: "Please fill all fields."});
        }
        console.log(`Name: ${name}, Profession: ${profession}, Income: ${income}`);

        const newForm = new Form({
            userId: user._id,
            name,
            profession,
            income
        });
        await newForm.save();

        return res.status(201).json({
            message: "Form filled successfully"
        });

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

// export const formsData = async (req, res) => {
//   try {
//     const token = req.headers.authorization;
//     if (!token) return res.status(401).json({ message: "No token provided" });

//     const user = await User.findOne({ token });
//     if (!user) return res.status(401).json({ message: "Unauthorized user" });

//     const formData = await Form.findOne({  userId: user._id });

//     if (!formData) {
//       return res.status(404).json({ message: "No data found for this user" });
//     }

//     return res.status(200).json(formData);
//   } catch (error) {
//     console.error("Error in getGoals:", error);
//     return res.status(500).json({ message: error.message });
//   }
// };
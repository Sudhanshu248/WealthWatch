import InputData from '../models/inputData.models.js';
import User from '../models/user.models.js';
import Form from '../models/form.models.js';


// POST: Save input data
export const SavedinputData = async (req, res) => {
  const { category, paymentMethod, date, name, price } = req.body;

  try {
    const token = req.headers.authorization;

    if (!category || !paymentMethod || !date || !name || !price) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const user = await User.findOne({ token });
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized user' });
    }

 
    const form = await Form.findOne({ userId: "686b7838b7d7a1b888ffb1db" });

    if (!form) {
      return res.status(404).json({ error: 'Form data not found' });
    }

    const { income } = form;


    // Create new input data
    const newInput = new InputData({
      userId: "686a6e23f911c871e9e6556b",
      totalBudget: income,
      expence: [
        {
          category,
          items: [
            {
              name,
              price,
              date,
              paymentMethod,
            },
          ],
        },
      ],
    });

    await newInput.save();

    console.log("Saved input data:", newInput);
    res.status(201).json({ message: 'Input data saved successfully' });

  } catch (error) {
    console.error("Error saving input data:", error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// GET: Fetch all input data
export const getInputData = async (req, res) => {
  try {
   
    // const  token = req.headers.authorization;
    // if (!token) {
    //   return res.status(401).json({ error: 'No token provided' });
    // }

    // const user = await User.findOne({ token });
    // if (!user) {
    //   return res.status(401).json({ error: 'Unauthorized user' });
    // }


    const data = await InputData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};



export const deleteInputData = async (req, res) => {
  const { category, name } = req.body;

  try {
    if (!category || !name) {
      return res.status(400).json({ error: 'Category and name are required.' });
    }

    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const user = await User.findOne({ token });
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized user' });
    }

    const result = await InputData.findOneAndUpdate(
      { userId: "686a6e23f911c871e9e6556b", "expence.category": category },
      {
        $pull: {
          "expence.$.items": { name }
        }
      },
      { new: true } 
    );

    if (!result) {
      return res.status(404).json({ error: 'Item or category not found' });
    }

    return res.status(200).json({ message: 'Item deleted successfully' });

  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
};


import InputData from '../models/inputData.models.js'; 
import User from '../models/user.models.js';
import Form from '../models/form.models.js';


export const SavedinputData = async (req, res) => {
  try {
    const { category, paymentMethod, date, name, value, token } = req.body;

    console.log("Token:", token);

    const user = await User.findOne({ token });
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const form = await Form.findOne({ userId: user._id });
    if (!form) {
      return res.status(404).json({ error: 'Form data not found' });
    }
    const { income } = form;
    console.log("Form data:", form);

    if (!category || !paymentMethod || !date || !name || !value) {
      return res.status(400).json({ error: 'Please fill all fields.' });
    }

    const userid ='6868f1329d356958a958ec90'
    const inputData = await InputData.findOne({ userId: /*user._id*/ userid });
    if (!inputData) {
      return res.status(404).json({ error: 'Input data not found' });
    }
    const newItem = {
      name,
      value,
      date: new Date(date), 
      paymentMethod,
    };

    const categoryEntry = inputData.expence.find(exp => exp.category === category);

    if (categoryEntry) {
      categoryEntry.items.push(newItem);
    } else {
      inputData.expence.push({
        category,
        items: [newItem]
      });
    }

    inputData.totalBudget = income; // Update total budget from form data
    await inputData.save();

    console.log("Updated input data:", inputData);
    res.status(200).json({ message: 'Input data saved successfully', updatedInput: inputData });

  } catch (error) {
    console.error("Error saving input data:", error);
    return res.status(500).json({ error: 'Server error' });
  }
};

export const getInputData =async (req, res) => {
  try {
    const data = await InputData.find();
     res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}
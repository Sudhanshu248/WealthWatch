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

    // Verify user using token
    const user = await User.findOne({ token });
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized user' });
    }

    // Get income from Form model
    const form = await Form.findOne({ userId: user._id });

    if (!form) {
      return res.status(404).json({ error: 'Form data not found' });
    }

    const { income } = form;


    // Create new input data
    const newInput = new InputData({
      userId: user._id,
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
    const data = await InputData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

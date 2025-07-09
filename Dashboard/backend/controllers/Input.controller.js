import InputData from '../models/inputData.models.js';
import User from '../models/user.models.js';
import Form from '../models/form.models.js';

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

    const form = await Form.findOne({ userId: user._id });
    if (!form) {
      return res.status(404).json({ error: 'Form data not found' });
    }

    const income = form.income;

    const currentDate = new Date(date); // from input
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' }); // e.g., "July"
    const currentYear = currentDate.getFullYear();

    // 🌟 Step 1: Delete any records older than 6 months
    const allData = await InputData.find({ userId: user._id });

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    for (const entry of allData) {
      const entryDate = new Date(`${entry.month} 1, ${entry.year}`);
      if (entryDate < sixMonthsAgo) {
        await InputData.deleteOne({ _id: entry._id });
        console.log(`Deleted old data: ${entry.month} ${entry.year}`);
      }
    }

    // 🌟 Step 2: Upsert logic
    let input = await InputData.findOne({
      userId: user._id,
      month: currentMonth,
      year: currentYear,
    });

    if (input) {
      const catIndex = input.expence.findIndex(e => e.category === category);

      if (catIndex > -1) {
        input.expence[catIndex].items.push({ name, price, date, paymentMethod });
      } else {
        input.expence.push({
          category,
          items: [{ name, price, date, paymentMethod }],
        });
      }

      await input.save();
      return res.status(200).json({ message: 'Data updated successfully' });
    } else {
      const newInput = new InputData({
        userId: user._id,
        totalBudget: income,
        month: currentMonth,
        year: currentYear,
        expence: [
          {
            category,
            items: [{ name, price, date, paymentMethod }],
          },
        ],
      });

      await newInput.save();
      return res.status(201).json({ message: 'New input data saved' });
    }

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


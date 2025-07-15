import InputData from '../models/inputData.models.js';
import User from '../models/user.models.js';
import Form from '../models/form.models.js';

export const SavedinputData = async (req, res) => {
  const { category, paymentMethod, date, name, price } = req.body;

  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const user = await User.findOne({ token });
    if (!user) return res.status(401).json({ error: 'Unauthorized user' });

    const form = await Form.findOne({ userId: user._id });
    if (!form) return res.status(404).json({ error: 'Form data not found' });

    const income = form.income;
    const currentDate = new Date(date);
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' }).toLowerCase();
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    let inputData = await InputData.findOne({ userId: user._id });

    // If first time, create new inputData with previous 5 months + current
    if (!inputData) {
      inputData = new InputData({ userId: user._id, Monthly: [] });

      // Add 5 previous empty months
      const filledMonths = [];
      for (let i = 5; i >= 1; i--) {
        const prevDate = new Date(currentDate);
        prevDate.setMonth(currentDate.getMonth() - i);
        const prevMonth = prevDate.toLocaleString('default', { month: 'long' }).toLowerCase();

        filledMonths.push({
          month: prevMonth,
          totalBudget: income,
          expence: [],
          createdAt: prevDate
        });
      }

      // Add current month with data
      const currentMonthEntry = {
        month: currentMonth,
        totalBudget: income,
        expence: [{
          category,
          items: [{ name, price, date, paymentMethod }]
        }],
        createdAt: currentDate
      };

      inputData.Monthly = [...filledMonths, currentMonthEntry];
    } else {
      // Filter out entries older than 6 months
      inputData.Monthly = inputData.Monthly.filter(entry => {
        const entryDate = new Date(entry.createdAt);
        return entryDate >= sixMonthsAgo;
      });

      // Check if current month exists
      let monthEntryIndex = inputData.Monthly.findIndex(
        m => m.month.toLowerCase() === currentMonth
      );

      if (monthEntryIndex === -1) {
        // Add new month at end
        const newMonthEntry = {
          month: currentMonth,
          totalBudget: income,
          expence: [{
            category,
            items: [{ name, price, date, paymentMethod }]
          }],
          createdAt: currentDate
        };

        inputData.Monthly.push(newMonthEntry);
      } else {
        // Update existing month
        const monthEntry = inputData.Monthly[monthEntryIndex];
        let categoryEntry = monthEntry.expence.find(e => e.category === category);

        if (!categoryEntry) {
          monthEntry.expence.push({
            category,
            items: [{ name, price, date, paymentMethod }]
          });
        } else {
          categoryEntry.items.push({ name, price, date, paymentMethod });
        }

        // Move updated month to end (to ensure it stays at index 5)
        const updatedMonth = inputData.Monthly.splice(monthEntryIndex, 1)[0];
        inputData.Monthly.push(updatedMonth);
      }

      // Sort and keep latest 6 months
      inputData.Monthly.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      inputData.Monthly = inputData.Monthly.slice(-6);
    }

    inputData.markModified('Monthly');
    await inputData.save();

    return res.status(200).json({ message: 'Data saved successfully' });

  } catch (error) {
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

    const data = await InputData.find({ userId: "686e27f6b63247fd0291eed1" });
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
      { userId: "686e27f6b63247fd0291eed1", "expence.category": category },
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
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
};


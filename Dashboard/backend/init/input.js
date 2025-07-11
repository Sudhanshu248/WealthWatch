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

    // Step 1: Load user's InputData document
    let inputData = await InputData.findOne({ userId: user._id });
    if (!inputData) {
      inputData = new InputData({ userId: user._id, Monthly: [] });
    }

    // Step 2: Remove entries older than 6 months using createdAt
    inputData.Monthly = inputData.Monthly.filter(entry => {
      const entryDate = new Date(entry.createdAt);
      return entryDate >= sixMonthsAgo;
    });

    // Step 3: Find month entry (case-insensitive)
    let monthEntry = inputData.Monthly.find(m => m.month.toLowerCase() === currentMonth);

    if (!monthEntry) {
      // Create new month if not found
      monthEntry = {
        month: currentMonth,
        totalBudget: income,
        expence: [{
          category,
          items: [{ name, price, date, paymentMethod }]
        }],
        createdAt: new Date()
      };
      inputData.Monthly.push(monthEntry);
    } else {
      // Update existing month
      let categoryEntry = monthEntry.expence.find(e => e.category === category);
      if (!categoryEntry) {
        // Add new category
        categoryEntry = {
          category,
          items: [{ name, price, date, paymentMethod }]
        };
        monthEntry.expence.push(categoryEntry);
      } else {
        // Add item to existing category
        categoryEntry.items.push({ name, price, date, paymentMethod });
      }
    }

    //  Add this before saving
    if (inputData.Monthly.length > 6) {
      inputData.Monthly.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      inputData.Monthly = inputData.Monthly.slice(-6); // Keep only latest 6
    }
    inputData.markModified('Monthly'); // Make sure changes are tracked
    await inputData.save();

    return res.status(200).json({ message: 'Data saved successfully' });

  } catch (error) {
    console.error("Error saving input data:", error);
    return res.status(500).json({ error: 'Server error' });
  }
};
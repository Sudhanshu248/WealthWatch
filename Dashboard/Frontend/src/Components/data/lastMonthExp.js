export const lastMonthExpence = {
  totalBudget: {
    value: 1500,
  },

  expence: [
    {
      category: "food",
      items: {
        daal: { value: 55, date: "2025-05-03", payMethod: "cash" },
        samosa: { value: 35, date: "2025-05-05", payMethod: "upi" },
        coldDrink: { value: 45, date: "2025-05-05", payMethod: "upi" },
        milk: { value: 25, date: "2025-05-07", payMethod: "card" },
        biscuit: { value: 60, date: "2025-05-08", payMethod: "cash" }
      }
    },
    {
      category: "transport",
      items: {
        petrol: { value: 80, date: "2025-05-10", payMethod: "card" },
        bus: { value: 40, date: "2025-05-11", payMethod: "cash" },
        auto: { value: 25, date: "2025-05-12", payMethod: "cash" }
      }
    },
    {
      category: "personalExp",
      items: {
        clothes: { value: 90, date: "2025-05-14", payMethod: "card" },
        grooming: { value: 65, date: "2025-05-15", payMethod: "upi" }
      }
    },
    {
      category: "housing",
      items: {
        rent: { value: 140, date: "2025-05-01", payMethod: "bank transfer" },
        electricity: { value: 75, date: "2025-05-18", payMethod: "upi" },
        water: { value: 25, date: "2025-05-19", payMethod: "upi" }
      }
    },
    {
      category: "saving",
      items: {
        bank: { value: 80, date: "2025-05-20", payMethod: "bank transfer" },
        cash: { value: 90, date: "2025-05-22", payMethod: "cash" }
      }
    }
  ]
};

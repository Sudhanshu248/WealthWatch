export const CurrExpence = {
  totalBudget: {
    value: 1000,
  },

  expence: [
    {
      category: "food",
      items: {
        daal: { value: 40, date: "2025-06-26", payMethod: "cash" },
        samosa: { value: 40, date: "2025-06-27", payMethod: "cash" },
        coldDrink: { value: 30, date: "2025-06-28", payMethod: "upi" },
        milk: { value: 30, date: "2025-06-29", payMethod: "card" },
        biscuit: { value: 50, date: "2025-06-30", payMethod: "upi" }
      }
    },
    {
      category: "transport",
      items: {
        petrol: { value: 60, date: "2025-06-25", payMethod: "card" },
        bus: { value: 30, date: "2025-06-26", payMethod: "cash" },
        auto: { value: 20, date: "2025-06-27", payMethod: "cash" }
      }
    },
    {
      category: "personalExp",
      items: {
        clothes: { value: 70, date: "2025-06-24", payMethod: "card" },
        grooming: { value: 50, date: "2025-06-30", payMethod: "upi" }
      }
    },
    {
      category: "housing",
      items: {
        rent: { value: 120, date: "2025-06-01", payMethod: "bank transfer" },
        electricity: { value: 60, date: "2025-06-20", payMethod: "upi" },
        water: { value: 20, date: "2025-06-22", payMethod: "upi" }
      }
    },
    {
      category: "saving",
      items: {
        bank: { value: 50, date: "2025-06-15", payMethod: "bank transfer" },
        cash: { value: 70, date: "2025-06-18", payMethod: "cash" }
      }
    }
  ]
};

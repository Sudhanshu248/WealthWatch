export const CurrExpence = {
  totalBudget: {
    value: 1000,
  },

  expence: [
    {
      category: "food",
      items: {
        daal: { value: 40, date: "2025-06-26", payMethod: "cash" },
        samosa: { value: 40, date: "", payMethod: "" },
        coldDrink: { value: 30, date: "", payMethod: "" },
        milk: { value: 30, date: "", payMethod: "" },
        biscuit: { value: 50, date: "", payMethod: "" }
      }
    },
    {
      category: "transport",
      items: {
        petrol: { value: 60, date: "", payMethod: "" },
        bus: { value: 30, date: "", payMethod: "" },
        auto: { value: 20, date: "", payMethod: "" }
      }
    },
    {
      category: "personalExp",
      items: {
        clothes: { value: 70, date: "", payMethod: "" },
        grooming: { value: 50, date: "", payMethod: "" }
      }
    },
    {
      category: "housing",
      items: {
        rent: { value: 120, date: "", payMethod: "" },
        electricity: { value: 60, date: "", payMethod: "" },
        water: { value: 20, date: "", payMethod: "" }
      }
    },
    {
      category: "saving",
      items: {
        bank: { value: 50, date: "", payMethod: "" },
        cash: { value: 70, date: "", payMethod: "" }
      }
    }
  ]
};

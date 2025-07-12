import { fetchMonthlyData } from "./InputData.js";


const getCategoryData = async (categoryIndex) => {
  const inputData = await fetchMonthlyData(3);
  const TotalBudget = inputData.TotalBudget || 0;
  const categoryItems = inputData.expence?.[categoryIndex]?.items || {};

  const total = Object.values(categoryItems).reduce((sum, item) => {
    return sum + (Number(item?.price) || 0);
  }, 0);

  const listing = Object.entries(categoryItems).map(([key, item]) => ({
    name: item.name,
    value: item.price,
    percentage: total > 0 ? (item.price / total) * 100 : 0,
  }));

  const percentage = TotalBudget > 0 ? (total / TotalBudget) * 100 : 0;

  return {
    listing,
    total,
    percentage,
    TotalBudget,
  };
};


export const ThirdFoodExpence = async () => {
  const { listing: Foodlist, total: foodExpence, percentage: Foodpercentage, TotalBudget } =
    await getCategoryData(0);
  return { Foodlist, foodExpence, Foodpercentage, TotalBudget };
};

export const ThirdTransportExpence = async () => {
  const { listing: TransportListing, total: transportExpence, percentage: TransportPercentage } =
    await getCategoryData(1);
  return { TransportListing, transportExpence, TransportPercentage };
};

export const ThirdPersonalExpence = async () => {
  const { listing: PersonalListing, total: personalExpence, percentage: Personal_percentage } =
    await getCategoryData(2);
  return { PersonalListing, personalExpence, Personal_percentage };
};

export const ThirdHousingExpence = async () => {
  const { listing: HousingListing, total: housingExpence, percentage: Housing_percentage } =
    await getCategoryData(3);
  return { HousingListing, housingExpence, Housing_percentage };
};

export const ThirdSavingExpence = async () => {
  const { listing: SavingListing, total: savingExpence, percentage: Saving_percentage } =
    await getCategoryData(4);
  return { SavingListing, savingExpence, Saving_percentage };
};


export const TotalExpence = async () => {
  const inputData = await fetchMonthlyData(3);
  const TotalBudget = inputData.TotalBudget || 0;
  const Expences = inputData.expence ?? [];

  const Spended = Expences.reduce((sum, category) => {
    const values = Object.values(category.items || {}).map((obj) => obj.price || 0);
    const categoryTotal = values.reduce((catSum, val) => catSum + val, 0);
    return sum + categoryTotal;
  }, 0);

  const TotalExpence_percentage = TotalBudget > 0 ? (Spended / TotalBudget) * 100 : 0;
  return { TotalBudget, TotalExpence_percentage, Spended };
};

export const ThirdDate = async () => {
  const data = await fetchMonthlyData(3);
  return data.date;
};

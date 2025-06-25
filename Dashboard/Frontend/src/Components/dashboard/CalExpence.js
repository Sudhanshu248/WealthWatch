import { CurrExpence } from "../data/CurrExp";

export const FoodExpence=(CurrExp)=>{
    
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    
    // Formula for calculating food expense
    const FoodExpenceObj = CurrExpence.expence?.[0] || {};
    
    const foodExpence = Object.values(FoodExpenceObj).reduce((sum, category) => {
            const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
            const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
            return sum + categoryTotal;
        }, 0);
    
        const Foodpercentage = TotalBudget > 0 ? (foodExpence / TotalBudget) * 100 : 0;
        
        return {
            foodExpence,
        TotalBudget,
        foodExpence,
        Foodpercentage
    };
}


export const TransportExpence=(CurrExp)=>{
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const TransportExpenceObj = CurrExpence.expence?.[1] || {};

    const transportExpence = Object.values(TransportExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    const TransportPercentage = TotalBudget > 0 ? (transportExpence / TotalBudget) * 100 : 0;

    return{
    transportExpence,
        TransportPercentage
};
}
export const PersonalExpence=(CurrExp)=>{

  const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const PersonalExpenceObj = CurrExpence.expence?.[2] || {};

    const personalExpence = Object.values(PersonalExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    const Personal_percentage = TotalBudget > 0 ? (personalExpence / TotalBudget) * 100 : 0;

    return {
        Personal_percentage,
    personalExpence
    }

}
export const SavingExpence=(CurrExp)=>{

    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const SavingExpenceObj = CurrExpence.expence?.[3] || {};

    const savingExpence = Object.values(SavingExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    const Saving_percentage = TotalBudget > 0 ? (savingExpence / TotalBudget) * 100 : 0;

  return {
    Saving_percentage,
    savingExpence
  }

}
export const HousingExpence=(CurrExp)=>{
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const HousingExpenceObj = CurrExpence.expence?.[4] || {};

    const housingExpence = Object.values(HousingExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    const Housing_percentage = TotalBudget > 0 ? (housingExpence / TotalBudget) * 100 : 0;

   return {
    Housing_percentage,
housingExpence
}
}



export const TotalExpence = (CurrExp)=>{
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0 ;
  const Expence = CurrExpence.expence;
    const RemaningBalance = Expence.reduce((sum, category) => {
        const values = Object.values(category.items).map(obj => obj.value);
        const categoryTotal = values.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);
    const TotalExpence_percentage = (RemaningBalance / TotalBudget) * 100;

    return{TotalExpence_percentage, RemaningBalance}
}








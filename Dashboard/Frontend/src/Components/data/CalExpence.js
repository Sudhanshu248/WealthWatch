import { CurrExpence } from "./CurrExp";

export const FoodExpence = (CurrExp) => {

    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;

    // Formula for calculating food expense
    const FoodExpenceObj = CurrExpence.expence?.[0] || {};

    const foodExpence = Object.values(FoodExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    // Formula for foodlistiing
    const Foodlist = Object.entries(FoodExpenceObj?.items || {}).map(([key, item]) => ({
        name: key,
        value: item.value,
        percentage: item.value / foodExpence * 100
    }))

    const Foodpercentage = TotalBudget > 0 ? (foodExpence / TotalBudget) * 100 : 0;

    return {
        Foodlist,
        foodExpence,
        TotalBudget,
        foodExpence,
        Foodpercentage
    };
}


export const TransportExpence = (CurrExp) => {
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const TransportExpenceObj = CurrExpence.expence?.[1] || {};


    // Formula for calculating transport expense
    const transportExpence = Object.values(TransportExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    // Formula for Transport listing 
    const TransportListing = Object.entries(TransportExpenceObj?.items || {}).map(([key, item]) => ({
        name: key,
        value: item.value,
        percentage: item.value / transportExpence * 100
    }))


    const TransportPercentage = TotalBudget > 0 ? (transportExpence / TotalBudget) * 100 : 0;

    return {
        TransportListing,
        transportExpence,
        TransportPercentage
    };
}



export const PersonalExpence = (CurrExp) => {

    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const PersonalExpenceObj = CurrExpence.expence?.[2] || {};

    const personalExpence = Object.values(PersonalExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    // Formula for personal listing
    const PersonalListing = Object.entries(PersonalExpenceObj?.items || {}).map(([key, item]) => ({
        name: key,
        value: item.value,
        percentage: item.value / personalExpence * 100
    }))

    const Personal_percentage = TotalBudget > 0 ? (personalExpence / TotalBudget) * 100 : 0;

    return {
        PersonalListing,
        Personal_percentage,
        personalExpence
    }

}



export const HousingExpence = (CurrExp) => {
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const HousingExpenceObj = CurrExpence.expence?.[3] || {};

    const housingExpence = Object.values(HousingExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    const HousingListing = Object.entries(HousingExpenceObj?.items || {}).map(([key, item]) => ({
        name: key,
        value: item.value,
        percentage: item.value / housingExpence * 100
    }))

    const Housing_percentage = TotalBudget > 0 ? (housingExpence / TotalBudget) * 100 : 0;

    return {
        HousingListing,
        Housing_percentage,
        housingExpence
    }
}


export const SavingExpence = (CurrExp) => {

    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const SavingExpenceObj = CurrExpence.expence?.[4] || {};

    const savingExpence = Object.values(SavingExpenceObj).reduce((sum, category) => {
        const itemValues = Object.values(category).map(item => Number(item?.value) || 0);
        const categoryTotal = itemValues.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);

    // Saving listing
    const SavingLisitng = Object.entries(SavingExpenceObj?.items || {}).map(([key, item]) => ({
        name: key,
        value: item.value,
        percentage: item.value / savingExpence * 100
    }))

    const Saving_percentage = TotalBudget > 0 ? (savingExpence / TotalBudget) * 100 : 0;

    return {
        SavingLisitng,
        Saving_percentage,
        savingExpence
    }

}



export const TotalExpence = (CurrExp) => {
    const TotalBudget = Number(CurrExpence.totalBudget?.value) || 0;
    const Expence = CurrExpence.expence;
    const RemaningBalance = Expence.reduce((sum, category) => {
        const values = Object.values(category.items).map(obj => obj.value);
        const categoryTotal = values.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);



    const TotalExpence_percentage = (RemaningBalance / TotalBudget) * 100;

    return { TotalExpence_percentage, RemaningBalance }
}








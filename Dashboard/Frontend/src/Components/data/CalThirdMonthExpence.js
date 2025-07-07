import { fetchData3 } from "./InputData.js";

export const FoodExpence = async () => {

    const inputData = await fetchData3();
    const TotalBudget = inputData.TotalBudget || 0;
    
    const FoodExpenceObj = inputData.expence?.[0]?.items || {};
    const foodExpence = Object.values(FoodExpenceObj).reduce((sum, value) => {
        return sum + (Number(value?.value) || 0);
    }, 0);

    // Formula for foodlistiing
    const Foodlist = Object.entries(FoodExpenceObj).map(([key, item]) => ({
        name: item.name,
        value: item.value,
        percentage: foodExpence > 0 ? (item.value / foodExpence) * 100 : 0
    }));

    const Foodpercentage = TotalBudget > 0 ? (foodExpence / TotalBudget) * 100 : 0;

    return {

        Foodlist,
        foodExpence,
        TotalBudget,
        Foodpercentage
    };
}

export const TransportExpence = async () => {

    const inputData = await fetchData3();
    const TotalBudget = inputData.TotalBudget || 0;
    const TransportExpenceObj = inputData.expence?.[1]?.items || {};

    const transportExpence = Object.values(TransportExpenceObj).reduce((sum, value) => {
        return sum + (Number(value?.value) || 0);
    }, 0);

    // Formula for Transport listing 
    const TransportListing = Object.entries(TransportExpenceObj).map(([key, item]) => ({
        name: item.name,
        value: item.value,
        percentage: transportExpence > 0 ? (item.value / transportExpence) * 100 : 0
    }))

    const TransportPercentage = TotalBudget > 0 ? (transportExpence / TotalBudget) * 100 : 0;
    return {
        TransportListing,
        transportExpence,
        TransportPercentage
    };
}

export const PersonalExpence = async () => {


    const inputData = await fetchData3();
    const TotalBudget = inputData.TotalBudget || 0;
    const PersonalExpenceObj = inputData.expence?.[2]?.items || {};


    const personalExpence = Object.values(PersonalExpenceObj).reduce((sum, value) => {
        return sum + (Number(value?.value) || 0);
    }, 0);
    // Formula for personal listing
    const PersonalListing = Object.entries(PersonalExpenceObj).map(([key, item]) => ({
        name: item.name,
        value: item.value,
        percentage: personalExpence > 0 ? (item.value / personalExpence) * 100 : 0
    }))

    const Personal_percentage = TotalBudget > 0 ? (personalExpence / TotalBudget) * 100 : 0;
    return {
        PersonalListing,
        Personal_percentage,
        personalExpence
    }
}

export const HousingExpence = async () => {

    const inputData = await fetchData3();
    const TotalBudget = inputData.TotalBudget || 0;
    const HousingExpenceObj = inputData.expence?.[3]?.items || {};

    const housingExpence = Object.values(HousingExpenceObj).reduce((sum, value) => {
        return sum + (Number(value?.value) || 0);
    }, 0);

    // Formula for housing listing
    const HousingListing = Object.entries(HousingExpenceObj).map(([key, item]) => ({
        name: item.name,
        value: item.value,
        percentage: housingExpence > 0 ? (item.value / housingExpence) * 100 : 0
    }))
    const Housing_percentage = TotalBudget > 0 ? (housingExpence / TotalBudget) * 100 : 0;
    return {
        HousingListing,
        Housing_percentage,
        housingExpence
    }
}

export const SavingExpence = async () => {

    const inputData = await fetchData3();
    const TotalBudget = inputData.TotalBudget || 0;
    const SavingExpenceObj = inputData.expence?.[4]?.items || {};

    const savingExpence = Object.values(SavingExpenceObj).reduce((sum, value) => {
        return sum + (Number(value?.value) || 0);
    }, 0);

    // Saving listing
    const SavingListing = Object.entries(SavingExpenceObj).map(([key, item]) => ({
        name: item.name,
        value: item.value,
        percentage: savingExpence > 0 ? (item.value / savingExpence) * 100 : 0
    }));

    const Saving_percentage = TotalBudget > 0 ? (savingExpence / TotalBudget) * 100 : 0;

    return {
        SavingListing,
        Saving_percentage,
        savingExpence
    }
}

export const TotalExpence = async () => {
    const inputData = await fetchData3();
    const TotalBudget = inputData.TotalBudget || 0;
    const Expences = inputData?.expence? inputData.expence : [];
    
    const Spended = Expences.reduce((sum, category) => {
        const values = Object.values(category.items || {}).map(obj => obj.value);
        const categoryTotal = values.reduce((catSum, val) => catSum + val, 0);
        return sum + categoryTotal;
    }, 0);
 
    const TotalExpence_percentage = TotalBudget > 0 ? (Spended / TotalBudget) * 100 : 0;
    return { TotalBudget, TotalExpence_percentage, Spended }
}

export const ThirdDate =async()=>{
    const data = await  fetchData3();
    const date = data.date

    return date;
}







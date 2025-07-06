import axios from "axios";
import { BASE_url } from "../../axios.config.js";

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_url}/input/alldata`);
        const TotalBudget = response.data[0].totalBudget;
        const expence = response.data[0].expence;
        
        return  {
            TotalBudget : TotalBudget,
            expence: expence,
        };
    }
    catch (error) {
        console.log(error);
    }
}



    

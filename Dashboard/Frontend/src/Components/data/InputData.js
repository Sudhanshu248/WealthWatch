import axios from "axios";
import { BASE_url } from "../../axios.config.js";



// const userdata = async () => {

//     const response = await axios.get(`${BASE_url}/userdata`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": localStorage.getItem("token"),
//         },
//     });
//     // console.log("User Data:", response.data._id);
//     return response.data._id;

// }


export const fetchData1 = async () => {

    const token = localStorage.getItem("token");
    // const userId = await userdata();

    try {
        const response = await axios.get(`${BASE_url}/alldata` ,{
              headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        } );

        // const data = response.data.filter(item => item.userId === userId);
        //   console.log("Filtered Data:", data);
       const rawDate = response.data[0].expence[0].items[0].date;
       const date = rawDate.toString().slice(6, 7);
        const TotalBudget = response.data[0].totalBudget;
        const expence = response.data[0].expence;

        return {
            TotalBudget: TotalBudget,
            expence: expence,
            date: date,
        };
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData2 = async () => {

    const token = localStorage.getItem("token");
   

    try {
        const response = await axios.get(`${BASE_url}/alldata` ,{
              headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        } );

         const rawDate = response.data[1].expence[0].items[0].date;
       const date = rawDate.toString().slice(6, 7);
        const TotalBudget = response.data[1].totalBudget;
        const expence = response.data[1].expence;

        return {
            TotalBudget: TotalBudget,
            expence: expence,
            date:date,
        };
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData3 = async () => {

 

    try {
        const response = await axios.get(`${BASE_url}/alldata` ,{
              headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        } );

          const rawDate = response.data[2].expence[0].items[0].date;
       const date = rawDate.toString().slice(6, 7);
        const TotalBudget = response.data[2].totalBudget;
        const expence = response.data[2].expence;

        return {
            TotalBudget: TotalBudget,
            expence: expence,
            date:date,
        };
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData4 = async () => {
    try {
        const response = await axios.get(`${BASE_url}/alldata` ,{
              headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        } );

          const rawDate = response.data[3].expence[0].items[0].date;
       const date = rawDate.toString().slice(6, 7);

        const TotalBudget = response.data[3].totalBudget;
        const expence = response.data[3].expence;

        return {
            TotalBudget: TotalBudget,
            expence: expence,
            date:date,
               };
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData5 = async () => {

  

    try {
        const response = await axios.get(`${BASE_url}/alldata` ,{
              headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        } );

    
          const rawDate = response.data[4].expence[0].items[0].date;
       const date = rawDate.toString().slice(6, 7);
        const TotalBudget = response.data[4].totalBudget;
        const expence = response.data[4].expence;

        return {
            TotalBudget: TotalBudget,
            expence: expence,
            date:date,
        };
    }
    catch (error) {
        console.log(error);
    }
}

export const fetchData6 = async () => {


    try {
        const response = await axios.get(`${BASE_url}/alldata` ,{
              headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        } );

          const rawDate = response.data[5].expence[0].items[0].date;
       const date = rawDate.toString().slice(6, 7);
        const TotalBudget = response.data[5].totalBudget;
        const expence = response.data[5].expence;

        return {
            TotalBudget: TotalBudget,
            expence: expence,
            date:date,
        };
    }
    catch (error) {
        console.log(error);
    }
}





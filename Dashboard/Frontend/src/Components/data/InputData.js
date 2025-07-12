import axios from "axios";
import { BASE_url } from "../../axios.config.js";
import { BASE_URL } from "../../../../backend/axiosConfig.js";

export const fetchMonthlyData = async (monthIndex) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${BASE_url}/alldata`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const monthlyData = response.data[0]?.Monthly ?? [];

    if (monthIndex < 0 || monthIndex >= monthlyData.length) {
      throw new Error("Invalid month index");
    }

    const data = monthlyData[monthIndex];

    const rawDate = data?.expence?.[0]?.items?.[0]?.date ?? null;
    const date = rawDate ? new Date(rawDate).getMonth() + 1 : null;

    return {
      monthName: data?.month ?? "",
      TotalBudget: data?.totalBudget ?? 0,
      expence: data?.expence ?? [],
      date: date,
    };
  } catch (error) {
    console.error("Failed to fetch monthly data:", error);
    return {
      TotalBudget: 0,
      expence: [],
      date: null,
    };
  }
};

 export  const fetchGoalsFromBackend = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/getUserProfile`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

           const TotalBudget = response?.data?.formData.income;
           return TotalBudget
        } catch (error) {
            console.error("Error while fetching goals:", error.message);
        }
    };
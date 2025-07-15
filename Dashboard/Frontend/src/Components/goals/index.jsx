import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../../../backend/axiosConfig.js";
import { CurrentTotalExpence } from "../data/CalCurrentMonthExpence.js";
import './style.css'

export default function GoalsPage() {
  // State definitions
  const [GoalValue, setGoalValue] = useState({});
  const [savedGoals, setSavedGoals] = useState({});
  const [initialGoals, setInitialGoals] = useState([]);
  const [backendGoalsData, setBackendGoalsData] = useState({});
  const [TotalExpences, setTotalExpences] = useState(0);
  const [userId, setUserId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Load total budget from current month data
  useEffect(() => {
    const loadData = async () => {
      const budget = await CurrentTotalExpence();
      setTotalExpences(budget?.TotalBudget);
    };
    loadData();
  }, []);

  // Decode token and extract user ID
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const id = decoded?.id || decoded?.email || "guest";
        setUserId(id);
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  // Load goals from local file and backend once userId is available
  useEffect(() => {
    if (!userId) return;

    import("./goals.js")
      .then((module) => setInitialGoals(module.goals))
      .catch((err) => console.error("Failed to load goals:", err));

    fetchGoalsFromBackend(userId);
  }, [userId]);

  // Fetch existing goal values from backend
  const fetchGoalsFromBackend = async (userId) => {
    const userToken = localStorage.getItem("token");
    if (!userToken) {
      console.error("No user token found.");
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/goals`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": userToken,
        },
      });

      if (response.data) {
        const fetched = response.data;
        setBackendGoalsData(fetched);
        setGoalValue((prev) => ({ ...prev, ...fetched }));

        const updatedSaved = {};
        for (const key in fetched) {
          if (!["id", "token", "_v"].includes(key)) {
            updatedSaved[key.charAt(0).toUpperCase() + key.slice(1)] = true;
          }
        }

        setSavedGoals((prev) => ({ ...prev, ...updatedSaved }));
      }
    } catch (error) {
      console.error("Error while fetching goals:", error.message);
    }
  };

  // Handle input field changes
  const handleInput = (name, value) => {
    setGoalValue((prev) => ({ ...prev, [name]: value }));
  };

  // Save individual goal to backend
  const handleSave = async (name) => {
    const value = parseFloat(GoalValue[name]);
    if (isNaN(value)) {
      return;
    }

    // Validate total value does not exceed budget
    const totalValue = Object.values(GoalValue).reduce((sum, val) => {
      const parsed = parseFloat(val);
      return sum + (isNaN(parsed) ? 0 : parsed);
    }, 0);

    if (totalValue > TotalExpences) {
      alert(`Total should not be exceed ${TotalExpences}`);
      return;
    }

    const userToken = localStorage.getItem("token");
    if (!userToken) {
      console.error("User not authenticated.");
      return;
    }

    // Post goal data to backend
    try {
      const res = await axios.post(
        `${BASE_URL}/goals`,
        { name, value },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": userToken,
          },
        }
      );

      if (res.data) {
        setBackendGoalsData(res.data);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 10000);
      }

      const updatedSaved = { ...savedGoals, [name]: true };
      setSavedGoals(updatedSaved);
    } catch (error) {
      console.error("Error while saving goal:", error.message);
    }
  };

  // Delete a goal from local state
  const handleDelete = (name) => {
  
  };

  // Close success and error alerts
  const handleSuccess = () => setSuccess(false);
  const handleError = () => setError(false);

  return (
    <div className="flex">
      <div className="bg-[#B8D7DE8C] dashboaard-right mb-[80px] rounded-md mt-4 h-full w-[85vw] md:w-[300px] pt-6 px-5 dashboard"
        style={{ position: "fixed", right: 0, overflowY: "auto" }}>
        <div className="flex flex-col">
          <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-2 mb-2">Goals</h1>
          <p className="ml-2 mb-2">Set your goals for different categories.</p>
        </div>

        {/* Success alert */}
        {success && (
          <div className="flex flex-row m-auto justify-between w-full" style={{
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            color: "#155724",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
          }}>
            <div> Goal Successfully Recorded!</div>
            <button onClick={handleSuccess}><i className="fa-solid fa-xmark"></i></button>
          </div>
        )}

        {/* Error alert */}
        {error && (
          <div className="flex flex-row m-auto justify-between w-full" style={{
            backgroundColor: "#efb0abff",
            border: "1px solid #d48377ff",
            color: "#c10000ff",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
          }}>
            <div>Set Goal Deleted!</div>
            <button onClick={handleError}><i className="fa-solid fa-xmark"></i></button>
          </div>
        )}

        {/* Render all goal cards */}
        <section className="mt-6 flex flex-col items-center justify-center gap-6 w-full max-[460px]:mb-[200px]">
          {initialGoals.map((item) => (
            <div
              key={item.name}
              className="goal-1 flex flex-row justify-between items-center bg-white p-4 px-8 rounded-2xl w-full"
            >
              <p className="goal-text text-2xl pt-1 font-medium">{item.name}</p>
              <div className="flex items-center mt-2">
                <span>&#8377;</span>
                {savedGoals[item.name] ? (
                  <div className="ml-2">
                    {backendGoalsData[item.name.toLowerCase()] ?? GoalValue[item.name] ?? "N/A"}
                  </div>
                ) : (
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    className="pl-2 sm:pl-5 py-2 w-40 max rounded-2xl ml-2 max-[460px]:w-[10rem]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                    value={GoalValue[item.name] ?? ""}
                    onChange={(e) => handleInput(item.name, e.target.value)}
                  />
                )}

                {!savedGoals[item.name] && (
                  <button
                    className="text-white px-4 sm:px-8 py-2 rounded-3xl ml-6 cursor-pointer"
                    style={{ backgroundColor: "rgba(45, 83, 89, 1)" }}
                    onClick={() => handleSave(item.name)}
                  >
                    Save
                  </button>
                )}

                {savedGoals[item.name] && (
                  <button className="ml-3 cursor-pointer" onClick={() => handleDelete(item.name)}>
                    <i className="fa-solid fa-trash text-[#2D5359]"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

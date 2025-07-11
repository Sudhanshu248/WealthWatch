import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../../../backend/axiosConfig.js";
import { TotalExpence } from "../data/CalCurrentMonthExpence.js";


export default function GoalsPage() {
  const [GoalValue, setGoalValue] = useState({});
  const [savedGoals, setSavedGoals] = useState({});
  const [initialGoals, setInitialGoals] = useState([]);
  const [backendGoalsData, setBackendGoalsData] = useState({});
  const [TotalExpences ,setTotalExpences] = useState(0)
  const [userId, setUserId] = useState(null);

    useEffect(() => {
          const loadData = async () => {
              const budget = await TotalExpence();
              setTotalExpences(budget?.TotalBudget);
          };
  
          loadData();
      }, []);

  // Extract userId from token
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

  // Load goals when userId is ready
  useEffect(() => {
    if (!userId) return;

    const goalsKey = `goalValues_${userId}`;
    const savedKey = `savedGoals_${userId}`;

    const storedGoals = localStorage.getItem(savedKey);
    const storedValues = localStorage.getItem(goalsKey);

    if (storedValues) setGoalValue(JSON.parse(storedValues));
    if (storedGoals) setSavedGoals(JSON.parse(storedGoals));

    import("./goals.js")
      .then((module) => setInitialGoals(module.goals))
      .catch((err) => console.error("Failed to load goals:", err));

    fetchGoalsFromBackend(userId);
  }, [userId]);

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
          if (!["_id", "token", "__v"].includes(key)) {
            updatedSaved[key.charAt(0).toUpperCase() + key.slice(1)] = true;
          }
        }

        setSavedGoals((prev) => ({ ...prev, ...updatedSaved }));

        // Scoped localStorage
        const goalsKey = `goalValues_${userId}`;
        const savedKey = `savedGoals_${userId}`;

        localStorage.setItem(goalsKey, JSON.stringify({ ...GoalValue, ...fetched }));
        localStorage.setItem(savedKey, JSON.stringify({ ...savedGoals, ...updatedSaved }));
      }
    } catch (error) {
      console.error("Error while fetching goals:", error.message);
    }
  };

  const handleInput = (name, value) => {
    setGoalValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (name) => {
    const value = parseFloat(GoalValue[name]);
    if (isNaN(value)) {
      console.error("Invalid input for", name);
      return;
    }

    const totalValue = Object.values(GoalValue).reduce((sum, val) => {
      const parsed = parseFloat(val);
      return sum + (isNaN(parsed) ? 0 : parsed);
    }, 0);

    if (totalValue > TotalExpences ) {
      console.error("Total should not exceed ₹1000");
      return;
    }

    const userToken = localStorage.getItem("token");
    if (!userToken) {
      console.error("User not authenticated.");
      return;
    }

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
      }

      const updatedSaved = { ...savedGoals, [name]: true };
      setSavedGoals(updatedSaved);

      const goalsKey = `goalValues_${userId}`;
      const savedKey = `savedGoals_${userId}`;

      localStorage.setItem(goalsKey, JSON.stringify(GoalValue));
      localStorage.setItem(savedKey, JSON.stringify(updatedSaved));
    } catch (error) {
      console.error("Error while saving goal:", error.message);
    }
  };

  const handleDelete = (name) => {
    const updatedValues = { ...GoalValue };
    const updatedSaved = { ...savedGoals };
    delete updatedValues[name];
    delete updatedSaved[name];

    setGoalValue(updatedValues);
    setSavedGoals(updatedSaved);

    const goalsKey = `goalValues_${userId}`;
    const savedKey = `savedGoals_${userId}`;

    localStorage.setItem(goalsKey, JSON.stringify(updatedValues));
    localStorage.setItem(savedKey, JSON.stringify(updatedSaved));
  };

  return (
    <div className="flex">
      <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64 h-[86.5vh] w-[60vw] grow">
        <h1 className="text-3xl text-emerald-900 font-bold ml-16 mt-6 mb-1.5">Goals</h1>
        <p className="ml-16">Set your goals for different categories.</p>

        <section className="mt-7">
          {initialGoals.map((item) => (
            <div
              key={item.name}
              className="flex flex-row bg-white p-4 px-8 mx-auto mb-5 rounded-2xl justify-between"
              style={{ width: "90%" }}
            >
              <p className="text-2xl pt-1 font-medium">{item.name}</p>
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
                    className="pl-5 py-2 w-35 rounded-2xl ml-2"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                    value={GoalValue[item.name] ?? ""}
                    onChange={(e) => handleInput(item.name, e.target.value)}
                  />
                )}

                {!savedGoals[item.name] && (
                  <button
                    className="text-white px-8 py-2 rounded-3xl ml-6 cursor-pointer"
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

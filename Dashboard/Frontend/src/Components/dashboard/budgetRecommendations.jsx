import { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../../../../backend/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function BudgetRecommendation() {

    const navigate = useNavigate();
    const chatEndRef = useRef(null);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    // Auto-scroll to bottom when new response is added
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [response]);


    // Handles the "Back" button click and navigates to the dashboard
    const handleAction = () => {
        navigate('/dashboard');
    }

    // Handles sending the user's prompt to the backend and updating the response
    const handleQuery = async () => {
        // Prevent sending empty or whitespace-only prompts
        if (!prompt.trim()) return;

        setLoading(true);
        setPrompt("");

        // Add the user prompt to the response array with loading set to true
        setResponse((prev) => [
            ...prev,
            { prompt, response: null, loading: true }
        ]);

        try {
            // Send POST request to backend with prompt and token
            const res = await fetch(`${BASE_URL}/ask/ai`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
                Authorization: localStorage.getItem("token"), //  Note: This should be inside `headers` for proper auth
            });

            const data = await res.json();

            // If response is successful, update the last item with the result
            if (res.ok) {
                setResponse((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        prompt,
                        response: data.result,
                        loading: false,
                    };
                    return updated;
                });
            } else {
                // If response failed, update the last item with a failure message
                setResponse((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        prompt,
                        response: "Failed to connect to the server.",
                        loading: false,
                    };
                    return updated;
                });
            }
        } catch (err) {
            // Catch network or unexpected errors and push a failure message
            setResponse((prev) => [
                ...prev,
                { prompt, response: "Failed to connect to the server." }
            ]);
        } finally {
            // End loading state
            setLoading(false);
        }
    };

    // JSX Return
    return (
        <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64 w-[83vw] grow px-12 py-8">

            {/* Back Button */}
            <div className=" mb-8">
                <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer" onClick={handleAction} >
                    <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
                </button>
            </div>

            {/* Chat Area */}
            <div className="bg-white rounded-2xl mb-6 overflow-y-auto" style={{ padding: "1.5rem", fontFamily: "sans-serif", height: "55vh" }}>
                {response.map((item, index) => (
                    <div key={index} className="mb-6 flex flex-col gap-4 mx-4">

                        {/* User Prompt Display */}
                        <div className="flex justify-end items-start gap-3">
                            <div className="bg-emerald-100 text-gray-700 p-4 rounded-xl max-w-[75%] shadow-md">
                                <p className="text-[17px] font-bold text-emerald-900 mb-2">You:</p>
                                <p className="whitespace-pre-wrap">{item.prompt}</p>
                            </div>
                        </div>

                        {/* AI Response Display */}
                        <div className="flex justify-start items-start gap-4">
                            <div className="bg-gray-100 text-gray-600 p-4 rounded-xl max-w-[75%] shadow-md">
                                <p className="text-[17px] font-bold text-emerald-900 mb-4">AI:</p>
                                {item.loading ? (
                                    // Animated "thinking" dots while waiting
                                    <div className="flex items-center gap-2">
                                        <div className="bg-emerald-300 w-2 h-2 rounded-full animate-bounce [animation-delay:.1s]"></div>
                                        <div className="bg-emerald-300 w-2 h-2 rounded-full animate-bounce [animation-delay:.3s]"></div>
                                        <div className="bg-emerald-300 w-2 h-2 rounded-full animate-bounce [animation-delay:.5s]"></div>
                                        <span className="ml-2 text-sm text-emerald-700">AI is thinking...</span>
                                    </div>
                                ) : (
                                    <p className="whitespace-pre-wrap">{item.response}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {/* Empty div for smooth scroll */}
                <div ref={chatEndRef} />
            </div>

            {/* Prompt Input Section */}
            <div className="flex gap-7">
                <textarea
                    rows="2"
                    placeholder="Ask Anything.  Eg: Give me a budget plan for 10,000 INR per month."
                    value={prompt}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", width: "90%" }}
                    className="bg-white rounded-full pl-8 pr-8 py-3"
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button
                    onClick={handleQuery}
                    disabled={loading}
                    style={{ width: "9rem", margin: "auto" }}
                    className="bg-[#2D5359] text-white text-[23px] font-medium rounded-lg px-4 py-[0.4rem] cursor-pointer"
                >
                    Send &nbsp;<i className="fa-solid fa-arrow-right" style={{ color: "#fff" }}></i>
                </button>
            </div>

        </div>
    );
};

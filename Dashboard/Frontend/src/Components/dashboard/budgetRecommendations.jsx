import  { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../../../../backend/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function OpenAI() {
    const chatEndRef = useRef(null);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [response]);

    const navigate = useNavigate();
    
    const handleAction = () => {
        navigate('/dashboard');
    }

    const handleQuery = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        setPrompt("");

        setResponse((prev) => [
            ...prev,
            { prompt, response: null, loading: true }
        ]);

        try {
            const res = await fetch(`${BASE_URL}/ask/ai`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
                Authorization: localStorage.getItem("token"),
            });

            const data = await res.json();

            if (res.ok) {
                setResponse((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        prompt,
                        response: res.ok ? data.result : `Error: ${data.error}`,
                        loading: false,
                    };
                    return updated;
                });

            } else {
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
            setResponse((prev) => [...prev, { prompt, response: "Failed to connect to the server." }]);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64 w-[83vw] grow px-12 py-8">
            <div className=" mb-8">
                <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer" onClick={handleAction} ><i className="fa-solid fa-arrow-left"></i> &nbsp;Back</button>
            </div>

        <div className="bg-white rounded-2xl mb-6 overflow-y-auto" style={{ padding: "1.5rem", fontFamily: "sans-serif", height: "55vh"}}>
            {response.map((item, index) => (
                <div key={index} className="mb-6 flex flex-col gap-4 mx-4">
                    
                    {/* User Prompt */}
                    <div className="flex justify-end items-start gap-3">
                        <div className="bg-emerald-100 text-gray-700 p-4 rounded-xl max-w-[75%] shadow-md">
                            <p className="text-[17px] font-bold text-emerald-900 mb-2">You:</p>
                            <p className="whitespace-pre-wrap">{item.prompt}</p>
                        </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start items-start gap-4">
                        <div className="bg-gray-100 text-gray-600 p-4 rounded-xl max-w-[75%] shadow-md">
                            <p className="text-[17px] font-bold text-emerald-900 mb-4">AI:</p>
                            {item.loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="bg-emerald-300 w-2 h-2 rounded-full animate-bounce [animation-delay:.1s]"></div>
                                    <div className="bg-emerald-300 w-2 h-2 rounded-full animate-bounce [animation-delay:.3s]"></div>
                                    <div className="bg-emerald-300 w-2 h-2 rounded-full animate-bounce [animation-delay:.5s]"></div>
                                    <span className="ml-2 text-sm text-emerald-700">AI is thinking...</span>
                                </div>
                            ) : (
                                <p className="whitespace-pre-wrap ">{item.response}</p>
                            )}
                        </div>
                    </div>

                </div>
            ))}

            <div ref={chatEndRef} />
        </div>

        <div className="flex gap-7">
            <textarea rows="2"
                placeholder="Ask Anything.  Eg: Give me a budget plan for 10,000 INR per month."
                value={prompt}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", width: "90%"}}
                className="bg-white rounded-full pl-8 pr-8 py-3"
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={handleQuery} disabled={loading}
                style={{width: "9rem", margin: "auto"}}
                className="bg-[#2D5359] text-white text-[23px] font-medium rounded-lg px-4 py-[0.4rem] cursor-pointer"
            >
                Send &nbsp;<i className="fa-solid fa-arrow-right" style={{color: "#fff"}}></i>
            </button>
        </div>

        </div>
    );
};
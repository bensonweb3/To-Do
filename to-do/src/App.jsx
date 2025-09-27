import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Todo from "./Todo.json";

// ✅ Replace with your deployed contract address
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // ✅ Get contract with signer
  const getContract = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return null;
    }

    const provider = new ethers.BrowserProvider(window.ethereum); // ethers v6
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, Todo.abi, signer);
  };

  // ✅ Load tasks
  const loadTasks = async () => {
    const contract = await getContract();
    if (!contract) return;
    try {
      const tasks = await contract.getTasks();
      setTasks(tasks);
    } catch (err) {
      console.error("Error loading tasks:", err);
    }
  };

  // ✅ Add a task
  const addTask = async () => {
    if (!input.trim()) return;
    const contract = await getContract();
    if (!contract) return;
    try {
      const tx = await contract.addTask(input);
      await tx.wait();
      setInput("");
      loadTasks();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-5">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          📝 Decentralized To-Do App
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Manage your daily tasks securely on the blockchain. Add tasks, mark
          them complete, and experience the future of productivity.
        </p>

        {/* Input */}
        <div className="flex mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        {/* Tasks */}
        <ul className="space-y-3">
          {tasks.length === 0 ? (
            <li className="text-gray-500 text-center">
              No tasks yet. Add your first one above!
            </li>
          ) : (
            tasks.map((task, i) => (
              <li
                key={i}
                className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
              >
                <span>{task}</span>
                <span className="text-sm text-gray-400">✔</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;







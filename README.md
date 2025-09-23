# 📝 Todo DApp

A simple decentralized **Todo List application** built with **Solidity, Hardhat, React (Vite), TailwindCSS, and Ethers.js**.  
Users can add tasks, mark them as completed, and view their todos directly on the blockchain.

---

## ⚡ Tech Stack
- **Solidity** – Smart contract for storing todos  
- **Hardhat** – Development framework for Ethereum  
- **React (Vite)** – Frontend framework  
- **TailwindCSS** – Styling  
- **Ethers.js** – Interacting with the smart contract  
- **MetaMask** – Wallet connection  

---

## 📂 Project Structure
```
TodoDapp/
├── contracts/
│   └── Todo.sol                # Solidity smart contract
├── scripts/
│   └── deploy.js               # Hardhat deployment script
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main React app
│   │   ├── abis/Todo.json      # ABI file (copied after compilation)
│   │   └── index.css           # TailwindCSS styles
│   ├── index.html
│   └── package.json
├── hardhat.config.js
└── README.md
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Usernyagah/todo-dapp.git
cd todo-dapp
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Compile contracts
```bash
npx hardhat compile
```

### 4️⃣ Deploy contract to Core Testnet
Update your `.env` with your **private key** and **Core Testnet RPC URL**:

```env
PRIVATE_KEY=your_wallet_private_key
CORE_RPC=https://rpc.test.btcs.network
```

Run the deployment:
```bash
npx hardhat run scripts/deploy.js --network coretestnet
```

You’ll get an output:
```
Todo contract deployed to: 0x123...abc
```

Copy this contract address.

---

## 🎨 Frontend Setup

### 5️⃣ Move to frontend folder
```bash
cd frontend
npm install
```

### 6️⃣ Update contract address
Open `src/App.jsx` and replace:
```javascript
const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

with your deployed contract address.

### 7️⃣ Start frontend
```bash
npm run dev
```

Visit **http://localhost:5173** 🎉

---

## 🛠️ Features
- ✅ Add new tasks  
- ✅ View all tasks  
- ✅ Mark tasks as completed  
- ✅ Blockchain-powered persistence  

---

## 📜 License
MIT License  


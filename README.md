# 🌸 Sakura Token (SKR)

A custom ERC-20 token built with Solidity and Hardhat. This project demonstrates full token functionality with a comprehensive test suite, 
making it ideal for both learning and showcasing smart contract development skills.

---

## 📋 Token Details

- **Name**: Sakura  
- **Symbol**: SKR  
- **Decimals**: 18  
- **Total Supply**: 1,000,000 SKR  

---

## ⚙️ Tech Stack

- [Solidity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Chai](https://www.chaijs.com/) + [Ethers.js](https://docs.ethers.org/v5/) for testing
- Node.js

---

## 📁 Project Structure

sakura-token/
├── contracts/
│ └── Token.sol # Sakura token smart contract
├── test/
│ └── Token.test.js # Full test suite (deployment, transfers, approvals)
├── scripts/
│ └── deploy.js # Deployment script for local/testnet
├── .gitignore
├── hardhat.config.js
├── package.json
├── README.md
└── LICENSE

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Tests

```bash
npx hardhat test
```

### 3. Deploy Locally

Start local node:
```bash
npx hardhat node
```
In a new terminal, deploy the token:
```bash
npx hardhat run scripts/deploy.js --network localhost
```
### 4. Deploy to Testnet 
🔐 Environment Setup (for Testnet)

Create a .env file in the root(if deploying to Sepolia or Goerli):
```.env
PRIVATE_KEY=your_private_key
ALCHEMY_URL=https://eth-sepolia.g.alchemy.com/v2/your_key
```
Your hardhat.config.js:
```js file  
  sepolia: {
    url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    accounts: process.env.PRIVATE_KEYS.split(",")
  }
```
Deploy with:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
✅ Features
- ERC-20 Transfers — transfer, approve, transferFrom

- Allowance Logic — secure delegation and controlled spending

- Edge Case Handling — reverts for invalid recipient or overspend

- Events Emitted — Transfer and Approval for transparency

- Full Test Suite — includes success and failure conditions

📝 License
This project is licensed under The Unlicense — released into the public domain for free reuse and adaptation.

🧠 Author
Eugene McGrath
Blockchain Developer | Smart Contract Engineer
🔗 GitHub: @CryptoMachineGene

Want to connect or collaborate?
📬 Let’s connect on LinkedIn

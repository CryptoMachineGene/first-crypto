// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const name = "Sakura";
  const symbol = "SKR";
  const totalSupply = "1000000";

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy(name, symbol, totalSupply);

  console.log(`Sakura Token (SKR) deployed to: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

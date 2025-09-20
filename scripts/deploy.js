const hre = require("hardhat");

async function main() {
  const Todo = await hre.ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();
  await todo.waitForDeployment();
  console.log("Todo deployed to:", await todo.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

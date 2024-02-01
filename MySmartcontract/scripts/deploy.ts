import { ethers } from "hardhat";

async function main() {
  const myMessage = await ethers.deployContract("MyMessage", ["unlockTime"]);

  await myMessage.waitForDeployment();

  console.log(`contract address is ${myMessage.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

console.log("Loaded environment variables:", process.env);

const SEPOLIA_API_KEY_URL = process.env.SEPOLIA_API_KEY_URL || "";
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";

type HttpNetworkAccountsUserConfig = any;
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/FRC9i8y6nwyWBdY1i3ahDh68Eeoqh2tt",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY as string],
    },
  },
};

export default config;

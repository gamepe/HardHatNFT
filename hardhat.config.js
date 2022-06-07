require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [PRIVATE_KEY]
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [MAINNET_PRIVATE_KEY]
    },
    dev: {
      url: "https://127.0.0.1:7545",
      accounts: [MAINNET_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}
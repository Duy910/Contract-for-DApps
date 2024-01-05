import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: { url: "https://node.l2.trustless.computer/" },
      allowUnlimitedContractSize: true,
      gas: 100000000,
      blockGasLimit: 1000000000,
    } as any,
    bsc_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRI_KEY],
      chainId: 97,
    } as any,
    // mainnet: {
    //   url: "https://node.l2.trustless.computer/",
    //   accounts: [process.env.MAINNET_DEPLOYER_PRIVATE_KEY],
    //   chainId: 42213,
    //   allowUnlimitedContractSize: true,
    //   treasuryAddress: process.env.MAINNET_TREASURY_ADDRESS,
    //   operationFundAddress: process.env.MAINNET_OPERATION_FUND_ADDRESS,
    //   jackpotAddress: process.env.MAINNET_JACKPOT_ADDRESS,
    // } as any,
  },
  etherscan: {
    apiKey: "SR13HM718RQFWGR4MFWTC8Q2BY4AIP6FZ8",
    customChains: [
      {
        network: "testnet",
        chainId: 42070,
        urls: {
          apiURL: "https://nos-explorer.regtest.trustless.computer/api",
          browserURL: "https://nos-explorer.regtest.trustless.computer/",
        },
      },
      {
        network: "mainnet",
        chainId: 42213,
        urls: {
          apiURL: "https://explorer.l2.trustless.computer/api",
          browserURL: "https://explorer.l2.trustless.computer/",
        },
      },
    ],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
          viaIR: false,
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
    color: true,
    reporter: "mocha-multi-reporters",
    reporterOptions: {
      configFile: "./mocha-report.json",
    },
  },
};

export default config;

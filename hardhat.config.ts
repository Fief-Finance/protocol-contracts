/* eslint-disable import/no-extraneous-dependencies */
import { config as dotenvConfig } from 'dotenv';
import 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-etherscan';
import "@nomiclabs/hardhat-vyper";

dotenvConfig();

const explorerApiKey = process.env.EXPLORER_API_KEY as string;
const infuraApiKey = process.env.INFURA_API_KEY as string;
const account0PrivateKey = process.env.ACCOUNT_0_PK as string;
const account1PrivateKey = process.env.ACCOUNT_1_PK as string;
const account2PrivateKey = process.env.ACCOUNT_2_PK as string;
const accountPrivateKeys = [account0PrivateKey];
if (account1PrivateKey !== undefined ) {
  accountPrivateKeys.push(account1PrivateKey);
}
if (account2PrivateKey !== undefined ) {
  accountPrivateKeys.push(account2PrivateKey);
}
const settings = {
  optimizer: {
    enabled: true,
    // Optimize for how many times you intend to run the code.
    // Lower values will optimize more for initial deployment cost, higher
    // values will optimize more for high-frequency usage.
    runs: 1000,
    // To fix the 'stack too deep in assembly' error
    // Source: https://stackoverflow.com/questions/70310087/how-do-i-resolve-this-hardhat-compilererror-stack-too-deep-when-compiling-inli
    details: {
      yul: true,
      yulDetails: {
        stackAllocation: true,
        optimizerSteps: "dhfoDgvulfnTUtnIf"
      }
    }
  },
};
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      { version: '0.8.4', settings }
    ],
  },
  vyper: {
    version: "0.2.7",
  },
  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraApiKey}`,
      gasPrice: 45000000000,
      chainId: 5,
      accounts: accountPrivateKeys,
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${infuraApiKey}`,
      gasPrice: 25000000000, // 30 Gwei
      chainId: 1,
      accounts: accountPrivateKeys,
    },
    coverage: {
      url: 'http://localhost:8555',
    },
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 150,
    // See more details: https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/codechecks.md#failure-thresholds
    maxMethodDiff: 25,
    excludeContracts: []
  },
  etherscan: {
    apiKey: {
      mainnet: explorerApiKey,
      goerli: explorerApiKey
    }
  }
};
export default config;

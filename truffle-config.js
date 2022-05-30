
const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}


exports.networks = {
  ropsten: {
    provider: () => new HDWalletProvider(
      process.env.MNEMONIC,
      `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    ),
    network_id: 3,
    gas: 5500000,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true,
  },
};
exports.mocha = {
  // timeout: 100000
};
exports.compilers = {
  solc: {
    version: '0.5.12',
  },
};

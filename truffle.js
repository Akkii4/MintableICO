require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
  
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*',
    }
  },
   compilers: {
    solc: {
      version: "0.4.24",
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};

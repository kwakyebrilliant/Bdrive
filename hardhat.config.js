require('@nomiclabs/hardhat-waffle');
const privateKey = '';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
    matic: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/OPAn_R_vIjcnM9MeCVVuvET9glKc1Y_l',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.4',
      paths: {
    artifacts: './src/artifacts',
  },
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};
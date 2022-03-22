require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const privateKey=process.env.PRIVATE_KEY;
const endpoint=process.env.URL_RINKEBY;
const etherscanKey = process.env.ETHERSCAN_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity:{
    version: "0.8.8",
  },
  networks:{
    rinkeby:{
      url:endpoint,
      accounts:[`0x${privateKey}`]
    }
  },
  etherscan: {
    apiKey: etherscanKey
  }
};

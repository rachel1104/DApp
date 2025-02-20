const { ethers } = require("ethers");
const INFURA_ID = 'c2a048aa54cf45beb61ba79f513cb479'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
console.log(provider)
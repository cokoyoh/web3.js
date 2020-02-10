const Tx = require('ethereumjs-tx').Transaction;

const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/fce376b702dc4074997dfe4e60cd853b');

const accountOne = '0x829413Ae31a296e6ce3c061e9B8D759779e39808';
const accountTwo = '0x3095895c8b8D1F9b82C417324Ffb6457Fd239029';

const PRIVATE_KEY_ONE = Buffer.from(require('./config').PRIVATE_KEY_ONE, 'hex');
const PRIVATE_KEY_TWO = Buffer.from(require('./config').PRIVATE_KEY_TWO, 'hex');

console.info(PRIVATE_KEY_ONE);
console.info(PRIVATE_KEY_TWO);

const Web3 = require('web3');
const url = 'http://127.0.0.1:7545';
const accountOne = '0x3095895c8b8D1F9b82C417324Ffb6457Fd239029'; //address to an Ethereum node account
const accountTwo = '0xd47018Af036B1f3af75038c5bd47BB4cFC97fAE8'; //address to another Ethereum node account

const web3 = new Web3(url);

async function getAccountBalance(accountAddress) {
    await web3.eth.getBalance(accountAddress, (error, result) => console.log(result));
}

async function sendEther() {
    await web3.eth.sendTransaction({from: accountOne, to: accountTwo, value: web3.utils.toWei('2', 'ether')});
}

sendEther();

let accountOneBalance = getAccountBalance(accountOne);
let accountTwoBalance = getAccountBalance(accountTwo);

console.log(accountOneBalance);
console.log(accountTwoBalance);




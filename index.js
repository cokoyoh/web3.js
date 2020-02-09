const Web3 = require('web3');
const url = 'https://mainnet.infura.io/v3/fce376b702dc4074997dfe4e60cd853b'; //a url to an Etherium node using INFURA

//Ganache local development url
const ganacheLocalUrl = 'http://127.0.0.1:7545';

//this is from etherscan.io/accounts, select any random active account and get it's address
const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
const ganacheAddress = '0x3095895c8b8D1F9b82C417324Ffb6457Fd239029'; //for local development

const web3 = new Web3(url);

function getAccountBalanceInEther(ads = null) {
    ads = ads == null ? address : ads;
     web3.eth.getBalance(ads, (error, bal) => balance = bal)
        .then(response => {
            let balanceInEther = web3.utils.fromWei(response, 'ether');
            console.log(balanceInEther);
        })
        .catch(error => console.log(error));
}

function createAccount() {
    return web3.eth.accounts.create(); //this will expose your private key
}

console.log("Ether scan address account balance ======> " + getAccountBalanceInEther());
console.log("Ganache account balance ======> " + getAccountBalanceInEther(ganacheAddress));



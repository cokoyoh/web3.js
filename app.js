const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/fce376b702dc4074997dfe4e60cd853b');
const accountOne = '0x829413Ae31a296e6ce3c061e9B8D759779e39808';
const accountTwo = '0x3095895c8b8D1F9b82C417324Ffb6457Fd239029';
const PRIVATE_KEY_ONE = Buffer.from(require('./config').PRIVATE_KEY_ONE, 'hex');
const PRIVATE_KEY_TWO = Buffer.from(require('./config').PRIVATE_KEY_TWO, 'hex');

// async function getAccountBalance(address) {
//     await web3.eth.getBalance(address, (error, balance) => { console.log(web3.utils.toWei(balance, 'ether')) });
// }

web3.eth.getTransactionCount(accountOne, (error, txCount) => {
    //Build a transaction
    const txParams = {
        nonce: web3.utils.toHex(txCount),
        to: accountTwo,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    };

//sign the transaction
const tx = new Tx(txParams);

tx.sign(PRIVATE_KEY_ONE);

//Serialise the signed transaction before passing it to the send transaction call
const serialisedTransaction = tx.serialize();

const rawTransaction = '0x' + serialisedTransaction.toString('hex');

//broadcast a signed transaction
     web3.eth.sendSignedTransaction(rawTransaction, (error, txHash) => {
        console.log('txHash =====> ' + txHash);
    });
});

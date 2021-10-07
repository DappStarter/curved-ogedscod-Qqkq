require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift response outside prosper inflict bread suit gaze'; 
let testAccounts = [
"0x978f8b23f174f231531c9939669ec54cee6b0e158bd18a0dfa4e7183d87e6af6",
"0x687392000e872c92b3f16cbffe16e9317cf824edd1b4d3aeb809d1ec0bcb1770",
"0x2902025b721827c4789ef7c6275c22aeb02883cf59090d4be2e09314aeba617f",
"0xb6d5342275e2d0ae008514648a7da0c91ffaa53eac4c8390a8a44fc6ce67d8d8",
"0x48caf73c84eae0a455a48c9eb867c2e672f8739f85ac99125e783b5916da09dc",
"0x746e70335d0192407f8869a80672dddcb8d04eb42fdd22103812690511ba74c1",
"0x356301cbbf138f20b0df3877301d24376850f7c5ee46c4205bd41756ac173986",
"0x035e0fe08a689e8cd51ead9abb55b70845b3d866399077253ec6f9b3da0b2001",
"0x58087a5f50da2d0e1413b93809fd400277d494bb667e98126cef6248787080dd",
"0xb33223cd375e3b2d28b73fb42e82bdc3160e9f509789fbcbc6b77f503fae8484"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind concert grace dry fortune slice'; 
let testAccounts = [
"0x2ca57f0815b047b666cd9fb7e8c13185490a8b99f7954c9435cb1ae8b0212f09",
"0x4215fab350969e158abc890660192cfb0e8e9c0dcee5fac9b19c89ce1b1ae2e0",
"0x9b257d0daa5ccce2066ba34f523e07587e7db24b6eaa07eef4b630ef17e15932",
"0xe782e4905adec035c27f642730a0069c9c248919bc7e454c387330a6e49b950c",
"0xfe26f84e561a050bdeaf62e9c63ccbf26d173ade2e18ba5227c8767a9ee8e661",
"0xf02378abd2b859f26d18a18b7c1781a2b01c1783094ce667990ef0da552e761c",
"0x856d6aeb7ee71973f43103cb518b60afd9439e61cae725e1cf3f3cae43962508",
"0xab9d2a4e65e86b56537996e880e3f768db0c465b43fd59557791baaee7a70ec6",
"0x5a7840f3d9d938b27788734bbbc7b62bc2f1fd19a1158f40e4e3241509271592",
"0xbf125dddaa867b0e5c18965a8ee02e565b2a11cdfff2f0a4abb5170cef045322"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


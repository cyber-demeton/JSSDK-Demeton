var HttpRequest = require("./lib/httprequest");
var Deb = require('./lib/deb');
var Account = require('./lib/account');
var Transaction = require('./lib/transaction');
var Utils = require('./lib/utils/utils');
var CryptoUtils = require('./lib/utils/crypto-utils');
var Unit = require('./lib/utils/unit');
var DVM = require('./lib/dvm/dvm');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Deb === 'undefined') {
    window.Deb = Deb;
}

module.exports = {
	HttpRequest: HttpRequest,
    Deb: Deb,
    Account: Account,
    Transaction: Transaction,
    Utils: Utils,
    CryptoUtils: CryptoUtils,
    Unit: Unit,
    DVM: DVM
};

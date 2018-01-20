var bitbank = require('../bitbank.js');
var jasmine = require('jasmine');
console.log(bitbank)
describe("BitBank", function () {

  it("fetchPair gets featuresets", function () {
    var bitbankApi = bitbank.BitBank('TEST_API_KEY');
    bitbankApi.fetchPair('USDT_BTC', function (featureset) {
      expect(featureset.currency_pair).toBe('USDT_BTC');
      callback()
    })
  });
  it("fetchAllPairs gets all featuresets", function (callback) {
    var bitbankApi = bitbank.BitBank('TEST_API_KEY');
    bitbankApi.fetchAllPairs(function (pairToFeaturesets){
      expect(pairToFeaturesets['USDT_BTC'].currency_pair).toBe('USDT_BTC');
      callback()
    })
  });
});

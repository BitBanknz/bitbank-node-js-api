var bitbank = require('../bitbank.js');


describe("BitBank", function () {

  it("fetchPair gets featuresets", function (callback) {
    var bitbankApi = bitbank.BitBank('TEST_API_KEY');
    bitbankApi.fetchPair('USDT_BTC', function (featureset) {
      expect(featureset.currency_pair).toBe('USDT_BTC');
      callback()
    })
  });
  it("fetchAllPairs gets all featuresets", function (callback) {
    var bitbankApi = bitbank.BitBank('TEST_API_KEY');
    bitbankApi.fetchAllPairs(function (pairToFeaturesets) {
      expect(pairToFeaturesets['USDT_BTC'].currency_pair).toBe('USDT_BTC');
      callback()
    })
  });
  it("fetchAllPairs historical featuresets", function (callback) {
    var bitbankApi = bitbank.BitBank('TEST_API_KEY');
    bitbankApi.getHistoricalFeaturesets('USDT_BTC', function (featuresets) {
      expect(featuresets[0].currency_pair).toBe('USDT_BTC');
      callback()
    })
  });
});

# bitbank-node-js-api
Node API for https://BitBank.nz

See api docs at https://BitBank.nz/api

### Example usage
```
npm install bitbank-node-js-api 
```


```
var bitbank = require('bitbank-node-js-api')
var bitbankApi = bitbank.BitBank('TEST_API_KEY');
# fetch latest forecasts for a single pair
bitbankApi.fetchPair('USDT_BTC', function (featureset) {
  console.log(featureset)
})
```

```
# fetch latest forecasts for all pairs
bitbankApi.fetchAllPairs(function (pairToFeaturesets) {
  console.log(pairToFeaturesets)
})
```

### Testing

```
npm install

node node_modules/jasmine-node/bin/jasmine-node spec/
```

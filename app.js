var express = require('express');
var app = express();
app.get('/', function (req, res) {
  const{ generateMnemonic, EthHdWallet } = require('eth-hd-wallet');
  var testMnemonic = generateMnemonic();
  res.send(testMnemonic);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

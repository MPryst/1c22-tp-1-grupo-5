const express = require('express');
const { eratosthenes_sieve } = require('./intensive');
const app = express();

// Ping endpoint: Healthcheck básico
app.get('/', function(req, res) {
  res.send("PING");
});

app.get('/primes', function(req, res) {
  var allPrimes = eratosthenes_sieve(parseInt(req.query.n));
  console.log(allPrimes)
  res.send(allPrimes)
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
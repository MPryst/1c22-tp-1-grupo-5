const express = require('express');
const { eratosthenes_sieve } = require('./intensive');
const app = express();

// Ping endpoint: Healthcheck básico
app.get('/', function(req, res) {
  res.send("PING");
});


// Intensive endpoint: Cálculos pesados sobre los datos
app.get('/primes', function(req, res) {
  var allPrimes;
  if (req.query.n === undefined) {
    allPrimes = eratosthenes_sieve();
  } else {
    allPrimes = eratosthenes_sieve(parseInt(req.query.n));
  }
  res.send(allPrimes)
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
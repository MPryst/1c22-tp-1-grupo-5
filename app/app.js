const express = require('express');
const { eratosthenes_sieve } = require('./intensive');
const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).send("HELLO!");
});


// Ping endpoint: Healthcheck básico
app.get('/ping', function(req, res) {
  res.status(200).send("PING");
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

app.get("/sync", (req, res) => {
  axios.get(`http://bbox:9090/`)
      .then(result => {
          res.send(`Bbox port 9090: Status ${result.status} Data ${result.data}`);
      })
      .catch(err => {
          res.send(`Error: ${err.message}`);
      });
});

app.get("/async", (req, res) => {
  axios.get(`http://bbox:9091/`)
      .then(result => {
          res.send(`Bbox port 9091: Status ${result.status} Data ${result.data}`);
      })
      .catch(err => {
          res.send(`Error: ${err.message}`);
      });
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
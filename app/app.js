const express = require('express');
const app = express();
const resources = require('./resources.json');

// Ping endpoint: Healthcheck básico
app.get('/', function(req, res) {
  res.send("PING");
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
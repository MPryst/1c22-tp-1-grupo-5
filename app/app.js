const express = require('express');
const app = express();

// Ping endpoint: Healthcheck básico
app.get('/', function(req, res) {
  res.send("PING");
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
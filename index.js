const express = require('express');

// Constants
const PORT = 49003;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world');
});

app.listen(PORT);
console.log('Running on the server http://localhost:' + PORT);


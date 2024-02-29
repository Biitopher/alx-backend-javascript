const express = require('express');
const app = express();

const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

const server = app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT}`);
});

module.exports = server;

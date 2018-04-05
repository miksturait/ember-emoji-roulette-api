const express = require('express');
const app = express();

const emojis = require('./fixtures/emojis');

app.get('/api/emojis', (req, res) => {
  res.send(emojis)
})


app.listen('3000', () => {
  console.log('Server listening on port: 3000');
});

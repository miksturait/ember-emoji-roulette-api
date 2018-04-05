const express = require('express');
const app = express();

app.get('/api/emojis', (req, res) => {
  res.send('H')
})


app.listen('3000', () => console.log('Server listening on port: 3000'));

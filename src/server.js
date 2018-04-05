const express = require('express');
const app = express();

const emojis = require('./fixtures/emojis');
const emojiSerializer = require('./serializers/emoji');

app.get('/api/emojis', (req, res) => {
  const data = emojiSerializer.serialize(emojis);
  res.send(data);
})


app.listen('3000', () => {
  console.log('Server listening on port: 3000');
});

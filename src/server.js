const express = require('express');
const cors = require('cors');
const app = express();

const emojis = require('./fixtures/emojis');
const emojiSerializer = require('./serializers/emoji');

const corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(cors())

app.get('/api/emojis', cors(corsOptions), (req, res) => {
  const data = emojiSerializer.serialize(emojis);
  res.send(data);
})


app.listen('3000', () => {
  console.log('Server listening on port: 3000');
});

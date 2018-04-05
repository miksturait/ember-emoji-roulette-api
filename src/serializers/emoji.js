const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('emojis', {
  attributes: ['codepoint', 'emojiIcon']
});

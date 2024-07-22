const axios = require('axios');

async function translateText(text, targetLanguage) {
  try {
    const response = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'en',
      target: targetLanguage,
      format: 'text'
    });
    return response.data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // If translation fails, return the original text
  }
}

module.exports = translateText;
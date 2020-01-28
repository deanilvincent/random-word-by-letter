module.exports = (letter, casing) => {
  letter = letter.toLowerCase()
  const words = require(`./letters/${letter}.js`);

  const values = Object.values(words.default)

  const randomValue = values[parseInt(Math.random() * values.length)]

  if (casing) {
    casing = casing.toLowerCase();
    if (casing !== "u" && casing !== "l") {
      console.error("casing value is undefined. Use either u or l.");
      return "Exception error. Check console log."
    }

    return casing === "u"
      ? randomValue.word.toUpperCase()
      : randomValue.word.toLowerCase()
  }

  // Default value
  return randomValue.word
}

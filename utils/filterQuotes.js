const fs = require("fs");
const path = require("path");

const quotesPath = path.join(process.cwd(), "public/quotes.json"); // path to original JSON file
const outputPath = path.join(process.cwd(), "public/quotes2.json"); // path to output JSON file

const rawData = fs.readFileSync(quotesPath);
const quotes = JSON.parse(rawData);

const filteredQuotes = quotes.filter((quote) => {
  const words = quote.quote.split(" ");
  return words.length <= 30;
});

const outputData = JSON.stringify(filteredQuotes, null, 2); // format output JSON for readability
fs.writeFileSync(outputPath, outputData);

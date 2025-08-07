const fs = require("fs");

function readFile(filePath) {
  const data = fs.readFileSync(filePath, "utf-8");
  return data;
}

module.exports = { readFile };
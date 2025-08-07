const path = require("path");
const { readFile } = require("../utils/util");

function getTours(req, res) {
  const filePath = path.join(__dirname, "../data/data.json");
  const tours = readFile(filePath);

  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(tours);
}

module.exports = { getTours };
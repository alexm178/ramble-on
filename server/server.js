const express = require("express");
const app = express();

const path = require("path")

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'))
})

app.post("/test", (req, res) => {
  console.log("got it")
})

app.listen(3001, () => {
  console.log("listening 3001")
})

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send('It is time!')
});

app.listen(PORT, function (err) {
  if (err) console.log("🔇 Error in server setup!");
  console.log(`🔊 Listening on Port ${PORT}!`);
});

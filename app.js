const express = require("express");
const router = require("./chicken_routes");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.listen(PORT, function (err) {
  if (err) console.log("🔇 Error in server setup!");
  console.log(`🔊 Listening on Port ${PORT}!`);
});

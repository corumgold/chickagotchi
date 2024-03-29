const express = require("express");
const router = require("./chicken_routes");
const app = express();
const { db } = require("./db");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", router);

const PORT = 3000;

const initialize = async () => {
  try {
    await db.sync({ force: false, logging: false });

    app.listen(PORT, function () {
      console.log(`🔊 Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("🔇 Error starting server!", error);
  }
};

initialize();

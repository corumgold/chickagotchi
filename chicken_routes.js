// const express = require("express");
const { newChicken, startScreen, chickenMain } = require("./views");
const router = require("express").Router();
const { Chicken } = require("./db");
const path = require("path");

router.get("/", (req, res) => {
  res.send(startScreen());
});

router.post("/new", async (req, res) => {
  const chickenName = req.body.name;
  const newChick = await Chicken.create({ name: chickenName });
  res.send(newChicken(chickenName));
});

router.get("/:chickenName", async (req, res) => {
  const chickenName = req.params.chickenName;
  const chicken = await Chicken.findOne({
    where: {
      name: chickenName,
    },
  });
  res.sendFile(path.join(__dirname, './public', 'chicken_main.html'));
});

module.exports = router;

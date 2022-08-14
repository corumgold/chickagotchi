// const express = require("express");
const { newChicken, startScreen, chickenMain } = require("./views");
const router = require("express").Router();
const { Chicken } = require("./db");

router.get("/", (req, res) => {
  res.send(startScreen());
});

router.post("/new", async (req, res) => {
  const chickenName = req.body.name;
  const newChick = await Chicken.create({ name: chickenName });
  res.redirect(`/${newChick.name}`);
});

router.get("/:chickenName", async (req, res) => {
  const chickenName = req.params.chickenName;
  const chicken = await Chicken.findOne({
    where: {
      name: chickenName,
    },
  });
  res.send(chickenMain(chicken));
});

module.exports = router;

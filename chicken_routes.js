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
  res.send(newChicken(chickenName));
});

router.get("/:chickenName", async (req, res) => {
  const chickenName = req.params.chickenName;
  const chicken = await Chicken.findOne({
    where: {
      name: chickenName,
    },
  });
  console.log('🦀', chicken)
  res.send(chickenMain(chickenName));
});

module.exports = router;

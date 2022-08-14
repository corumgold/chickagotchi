// const express = require("express");
const { faq, startScreen, chickenMain } = require("./views");
const router = require("express").Router();
const { Chicken } = require("./db");

router.get("/", (req, res) => {
  res.send(startScreen());
});

router.post("/new", async (req, res) => {
  const chickenName = req.body.name;
  const newChick = await Chicken.create({ name: chickenName });
  res.redirect(`/chickens/${newChick.name}`);
});

router.get("/faq", (req, res) => {
  res.send(faq());
});

router.get("/chickens/:chickenName", async (req, res) => {
  const chickenName = req.params.chickenName;
  const chicken = await Chicken.findOne({
    where: {
      name: chickenName,
    },
  });
  res.send(chickenMain(chicken));
});

module.exports = router;

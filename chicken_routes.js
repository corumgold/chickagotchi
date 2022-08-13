// const express = require("express");
const { newChicken, chickenMain } = require("./views");
const router = require("express").Router();
const { Chicken } = require("./db");

router.get("/", (req, res) => {
  res.send(chickenMain());
});

router.post("/new", async (req, res) => {
  const chickenName = req.body.name;
  const newChick = await Chicken.create({ name: chickenName });
  res.send(newChicken(chickenName));
});

module.exports = router;

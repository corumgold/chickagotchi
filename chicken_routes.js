// const express = require("express");
const views = require("./views/chicken_main");
const router = require("express").Router();
const { db, Chicken } = require("./db");

router.get("/", (req, res) => {
  res.send(views.chickenMain());
});

router.post("/new", async (req, res) => {
  const chickenName = req.body.name;
  const newChicken = await Chicken.create({ name: chickenName });
  res.send('A new chicken has been born!')
});

module.exports = router;

// const express = require("express");
const router = require("express").Router();
const { Chicken } = require("./db");

router.post("/new", async (req, res, next) => {
  try {
    const chickenName = req.body.name;
    const newChick = await Chicken.create({ name: chickenName });
    res.status(200).send(newChick);
  } catch (error) {
    next(error);
  }
});

router.get("/chickens", async (req, res, next) => {
  try {
    const allChickens = await Chicken.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send(allChickens);
  } catch (error) {
    next(error);
  }
});

router.put("/chickens/:chickenName/feed", async (req, res, next) => {
  try {
    const chickenName = req.params.chickenName;
    const chicken = await Chicken.findOne({
      where: {
        name: chickenName,
      },
    });
    await chicken.update({ lastFed: new Date() });
    res.status(200).send(`You fed ${chickenName}!`);
  } catch (error) {
    next(error);
  }
});

router.delete("/chickens/:chickenName", async (req, res, next) => {
  try {
    const chickenName = req.params.chickenName;
    const chicken = await Chicken.findOne({
      where: {
        name: chickenName,
      },
    });
    await chicken.destroy();
    res.status(200).send("Chicken deleted successfully");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

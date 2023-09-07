// const express = require("express");
const router = require("express").Router();
const { Chicken } = require("./db");

router.get("/", (req, res) => {
  res.send(startScreen());
});

router.post("/new", async (req, res) => {
  const chickenName = req.body.name;
  const newChick = await Chicken.create({ name: chickenName });
  res.status(200).send(newChick);
});

router.get("/faq", (req, res) => {
  res.send(faq());
});

router.get("/chickens", async (req, res) => {
  try {
    const allChickens = await Chicken.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send(allChickens);
  } catch (error) {
    console.error("Error fetching chickens:", error);
    res.status(500).send("Internal Server Error");
  }
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

router.delete("/chickens/:chickenName", async (req, res) => {
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
    console.error("Error deleting chicken:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

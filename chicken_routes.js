// const express = require("express");
const views = require("./views/chicken_main");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(views.chickenMain());
});

router.post("/new", async (req, res) => {
  res.send(req.body);
});

module.exports = router;

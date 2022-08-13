// const express = require("express");
const views = require("./views/chicken_main");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(views.chickenMain());
});

module.exports = router;

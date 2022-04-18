const express = require("express");

const router = express.Router();
const { createBodyPlotData } = require("../classes/Plot");
const hexapod = require("../classes/Hexapod");

router.route("/inverse").post(async (req, res) => {
  hexapod.bodyUpdate(req.body);
  let data = createBodyPlotData();
  res.json(data);
});

router.route("/forward").post(async (req, res) => {
  hexapod.legUpdate(req.body);
  let data = createBodyPlotData();
  res.json(data);
});

router.route("/parameter").post(async (req, res) => {
  hexapod.parameterUpdate(req.body);
  let data = createBodyPlotData();
  res.json(data);
});

router.route("/").get(async (req, res) => {
  res.json(hexapod.legInfo());
});

module.exports = router;

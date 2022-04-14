const express = require("express");
const cors = require("cors");
const { createBodyPlotData } = require("./hexapod/classes/Plot");
const { bodyLocalEulerAngles } = require("./hexapod/parameters");
const hexapod = require("./hexapod/classes/Hexapod");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.post("/transform", async (req, res) => {
  
  hexapod.bodyUpdate(req.body)
  let data = createBodyPlotData()
  res.json(data);

});


app.post("/parameter", async (req, res) => {
  
  hexapod.parameterUpdate(req.body)
  let data = createBodyPlotData()
  res.json(data);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

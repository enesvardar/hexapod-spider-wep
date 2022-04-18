const express = require("express");
const cors = require("cors");
const router = require("./hexapod/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use("/",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

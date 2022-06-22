const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./hexapod/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config()

app.use("/",router)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});



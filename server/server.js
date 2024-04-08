const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});

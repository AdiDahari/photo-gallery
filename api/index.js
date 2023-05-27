const express = require("express");
const cors = require("cors");
const { photosRouter } = require("./routes/photos");

const app = express();

app.use(cors());

app.use("/api/photos", photosRouter);

app.listen(4000, () => {
  console.log("server listening on port 4000");
});

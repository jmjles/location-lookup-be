const express = require("express");
const app = express();
const KeyRoute = require("./routes/keys");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT;

const middleware = [
  express.json(),
  cors({
    credentials: true,
    origin: [
      "https://location-lookup.jesusmj.com/",
      "http://location-lookup.jesusmj.com/",
      "http://jesusmj.com/",
      "https://jesusmj.com/",
    ],
  }),
];

app.use(...middleware);
app.use("/api", KeyRoute);

app.listen(port, () => console.log(`\nServer is running on port:${port}`));

const cors = require("cors");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const express = require("express");
const config = require("./config.json");
const api_key = config.API_KEY;

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per minute
});

app.post("/getWeather", limiter, async (req, res) => {
  const { city } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  try {
    const result = await axios.get(url);
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Proxy server started on port 3000");
});

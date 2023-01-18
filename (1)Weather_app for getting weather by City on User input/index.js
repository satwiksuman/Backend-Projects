const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/weather.html");
});

app.post("/", (req, res) => {
  const apikey = dummyapikey; //Here add your API key on place of "dummyapikey"
  const unit = "metric";
  const city = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=" +
    apikey +
    "&units=" +
    unit +
    "&q=" +
    city;

  https.get(url, (response) => {
    response.on("data", (data) => {
      const weather_data = JSON.parse(data);
      const temp = weather_data.main.temp;
      const weather_description = weather_data.weather[0].description;
      const icon = weather_data.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(
        "<h1>Temperature in " +
          req.body.cityName +
          " is " +
          temp +
          " celsius</h1>"
      );
      res.write("<h1>Weather is currently " + weather_description + "</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(4400, (err) => {
  if (err) {
    console.log("Error Occured");
    console.log(err);
  } else {
    console.log("Server started at port 4400 ");
  }
});

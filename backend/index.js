const express = require("express");
const dotenv = require("dontenv");
const app = express();

app.listen(5000, (err) => {
  if (err) {
    console.error("APP: ", err);
    console.log("Error listening to port 5000//");
  } else {
    console.log("Server is listening to port 5000//");
    console.log("Press CTRL+C to end server");
  }
});

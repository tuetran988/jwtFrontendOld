const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


// api demo login 
app.get("/api/login", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      token: "accessToken",
      timeExpired: Date.now() + 60 * 1000,
    },
  });
});
// api demo get user list 
app.get("/api/users", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: [{ name: "tran" }, { name: "cao" }, { name: "tue" }],
  });
});

// api demo get new Token  when token expired
app.get("/api/refreshToken", (req, res) => {
  return res.status(200).json({
    status: "success",
    elements: {
      token: "newAcessToken",
      timeExpired: Date.now() + 60 * 1000,
    },
  });
});

//end api
app.listen(PORT, () => {
  console.log(`Server listen in port :::: ${PORT}`);
});

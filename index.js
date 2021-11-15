const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { setSecretFriends } = require("./secretFriendsGenerator");

app.use(express.json());
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {  
  const { friendsList } = req.body;
  
  res.send(setSecretFriends(friendsList));
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
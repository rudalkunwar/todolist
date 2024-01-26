const express = require("express");
const mongose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require('body-parser');
//create the instance of our app
const app = express();

//connect to the database

//now lets make our routes
const dbURI =
  "mongodb+srv://rudalkunwar:messi10@cluster0.frsepin.mongodb.net/todolist?retryWrites=true&w=majority";
mongose
  .connect(dbURI)
  .then((res) => {
    app.listen(5000);
  })
  .catch((err) => console.log("Error connecting to Databasae"));

app.get("/backend", (req, res) => {
  res.json({ message: "connected to the server" });
});
app.use(bodyParser.json());
app.use(authRoutes);

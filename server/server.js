const express = require("express");
const mongose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require('body-parser');
const {requireAuth} = require('./middlewares/authMiddleware');
//create the instance of our app
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your routes and other middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
app.get('/dashboard',requireAuth,(req,res)=>{
  res.json();
})
app.use(authRoutes);

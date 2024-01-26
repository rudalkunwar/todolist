const express = require("express");
const app = express();
app.listen(5000);
app.use(express.json);
app.get('/backend',(req,res)=>{
    res.json({ redirect: "/blog" });
})
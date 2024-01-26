const express = require('express');
const app = express();
app.listen(5000);



app.get('/backend',(req,res)=>{
const user = {users:['rudal','aakash','pratik','basanta','soham']};
JSON.stringify(user);
res.json({user});
});
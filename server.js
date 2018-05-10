const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app=express();
const Routes=require('./api/routes');
//connect
mongoose.connect
('mongodb://admin:admin@ds241869.mlab.com:41869/test-db');
  

//parsers

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type:'application/json'}));

Routes(app);


//send Port
const port =process.env.PORT||'3000';
app.listen(port,()=>{
    console.log(`running on server ${port}`)
});



//test
//app.get('/',(req,res)=>{
 //   res.send('hellow world');
//});
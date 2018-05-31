const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/test-db');
mongoose.connection.once('open',()=>{
    console.log('connected to db!');
}).on('error',()=>{
    console.log('something went wrong!');
})
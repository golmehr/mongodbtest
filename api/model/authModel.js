const mongoose=require('mongoose');
const Schema=mongoose.Schema;





//FEE Model
const authSchema=new Schema({
    //Private,SemiPrivate,General,Children,...
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
  
    password:{
        type:String,
        required: true,
        minlength:6
    },
    token: {
        type:String,
        required: true
    },
});

module.exports=mongoose.model('auth',authSchema);

const auth=mongoose.model('auth',authSchema);


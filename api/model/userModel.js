const mongoose=require('mongoose');
//const Fee=require('./feeModel');
const auth=require('./authModel');
const regist=require('./registerModel');
const Schema=mongoose.Schema;
//ObjectId = Schema.Types.ObjectId;


//Student Model
const studentSchema=new Schema({
    auth:{
        type:Schema.Types.ObjectId,
        ref:'auth'
        },
    name : {
        type:String,
        required: true
    },
    lname: {
        type:String,
        required: true
    },
    id_number:{
        type:Number,
        required: true
    },
    birth:{
        type:Date,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    tel:{
        type:Number,
        required: true
    },
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
    date:{
        type:Date,
        default: Date.now()
    },
    //Registration Info
    register:[{ type:Schema.Types.ObjectId,
        ref:'register'}] 
    
});

//studentSchema.index({ "id_number": 1 },{ "unique": true, "background": false });



module.exports=mongoose.model('User',studentSchema);

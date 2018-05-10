const mongoose=require('mongoose');
const Fee=require('./feeModel');
const Schema=mongoose.Schema;
ObjectId = Schema.Types.ObjectId;


//Student Model
const studentSchema=new Schema({
    authuser:{
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
    register:[{
           //which Term ? 97-1,97-2,...
        term:{
            type:String,
            required: true
            },
         //which class ?Basic1,Basic2,...
        class:{
            type:String,
            required:true
             },
            //payment Info
            
        FEE:{
            type:Schema.Types.ObjectId,
            ref:'FEE'
            },
             //yes/NO
        paid:{
            type:String,
            required: true
            },
             //yes/NO
        book_buy:{
            type:String,
            required: true
            },
        score:{type:Number}
    
             }]
         
});

//studentSchema.index({ "id_number": 1 },{ "unique": true, "background": false });



module.exports=mongoose.model('User',studentSchema);

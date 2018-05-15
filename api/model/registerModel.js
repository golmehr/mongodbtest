const mongoose=require('mongoose');
const Fee=require('./feeModel');
const student=require('./userModel');
const Schema=mongoose.Schema;
//ObjectId = Schema.Types.ObjectId;


//Student Model
const registerSchema=new Schema({
    student : {
        type:Schema.Types.ObjectId,
        ref:'User'
        },
   
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
            
        FEE : {
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
    
         
});

//studentSchema.index({ "id_number": 1 },{ "unique": true, "background": false });



module.exports=mongoose.model('register',registerSchema);

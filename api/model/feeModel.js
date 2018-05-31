const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//FEE Model
const feeSchema = new Schema({
    //Private,SemiPrivate,General,Children,...
    feeType : {
        type:String,
        required: true

    },
    feeToman: {
        type:Number,
        required: true,
        min:0

    }
});

module.exports = mongoose.model('FEE',feeSchema);



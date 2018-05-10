const User=require('../model/feeModel');


//show all Fee(select *)
exports.find= async (req,res)=>{ 
  const fee=await User.find({});
  res.json(fee);
  }

//add a new Fee(insert)
exports.addUser=(req,res)=>{
    new User({
        feeType:req.body.feeType,
         feeToman: req.body.feeToman
             }).save((err)=>{
                 if(err) throw err;
                 res.json({
                     status:'success',
                     message:'you have successfully insert a new value!'
                 })
             })
   }  
//update FEE
exports.editUser=(req,res)=>{
    User.findOneAndUpdate({feeType:req.body.feeType},{feeToman:req.body.feeToman},(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
}

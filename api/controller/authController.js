const User=require('../model/authModel');


//show all auth(select *)
exports.find= async (req,res)=>{ 
  const auth=await User.find({});
  res.json(auth);
  }

//add a new auth(insert)
exports.addUser=(req,res)=>{
    new User({
        email:req.body.email,
        password: req.body.password
             }).save((err)=>{
                 if(err) throw err;
                 res.json({
                     status:'success',
                     message:'you have successfully added a new user!'
                 })
             })
   }  
//update FEE
exports.editUser=(req,res)=>{
    User.findOneAndUpdate({email:req.body.email},{password:req.body.password},(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
}

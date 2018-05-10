const User=require('../model/userModel');
const Fee=require('../model/feeModel');



//show all students(select *)
exports.find= async (req,res)=>{
const user=await User.find({});
res.json(user);
}


//add a new Student(insert)
exports.addUser=(req,res)=>{
   new User({
        name:req.body.name,
        lname:req.body.lname,
        id_number:req.body.id_number,
        birth:req.body.birth,
        address:req.body.address,
        tel:req.body.tel,        
        password: req.body.password,
        email:req.body.email,
        register:[{
            term: req.body.term,
            class: req.body.class,

            //////////
            FEE:req.body._id ,
            
            //////////
            paid: req.body.paid,
            book_buy: req.body.book_buy,
            score: req.body.score
        }]
            }).save((err)=>{
                if(err) throw err;
                res.json({
                    status:'success',
                    message:'you have successfully signed up!'
                })
            })
  }


//search for  a student * when user has forgotten her password and send her email 
exports.findUser= async (req,res)=>{
  const user=await User.findOne({email: req.body.email});
if(user){
    res.json(user);
}
else{
    res.json({
        status:'err',
        message:'user not found!'
             });
    }
  }


//delete student
exports.deleteUser=(req,res)=>{
    User.findOneAndRemove({email:req.body.email},(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
}

//update information(change password)
exports.editUser=(req,res)=>{
    User.findOneAndUpdate({id_number:req.body.id_number},({password:req.body.password},{}),(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
}



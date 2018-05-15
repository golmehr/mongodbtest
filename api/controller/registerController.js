const student=require('../model/userModel');
const Fee=require('../model/feeModel');


//show all Terms
exports.findTerm= async (req,res)=>{ 
  const register=await register.find({});
  res.json(register);
  }

//add a new Term
exports.addTerm=(req,res)=>{
    console.log(req.body);
    student.findById(req.body.id_number,(error,student) => {
        if(error) throw error;
    Fee.findById(req.body.feeType,(err,fee)=>{
    if(err) throw err;
    new register({
        student:req.body.id_number='123',
        term: req.body.term='2',
        class: req.body.class='fs',
        FEE:fee._id='5af0397fb067d503a8d6baed' ,
        paid: req.body.paid='yes',
        book_buy: req.body.book_buy='yes',
        score: req.body.score='20'
        })
            })
                })
        .save((err)=>{
                 if(err) throw err;
                 res.json({
                     status:'success',
                     message:'you have successfully insert a new value!'
                 })
             })
   }  

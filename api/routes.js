const userController=require('./controller/userController');
const feeController=require('./controller/feeController');
const authController=require('./controller/authController');
const registerController=require('./controller/registerController');



module.exports=(app)=>{

  //show all db(select *)
    app.route('/find/all/users')
    .get(
        userController.find
    );

 //add a new user(insert)
    app.route('/new/user')
       .post(
userController.addUser
       );

//search for  user * when user has forgotten her password and send her email
    app.route('/find/user')
       .post(
userController.findUser
       );

//delete user
       app.route('/delete/user')
       .post(
userController.deleteUser
       );

//update information(change password)
       app.route('/edit/user')
       .post(
userController.editUser
       );

    

////////////////////////////////////FEE TABLE/////////////////////////////////////////
  //show all FEE
  app.route('/find/all/fees')
  .get(
      feeController.findFee
  );

//add a new FEE
  app.route('/new/fee')
     .post(
feeController.addFee
     );

//update FEE
     app.route('/edit/fee')
     .post(
feeController.editFee
     );



  /////////auth table////////
    //show all users
    app.route('/find/all/auth')
    .get(
        authController.findAuth
    );
  
  //add a new users
    app.route('/new/auth')
       .post(
        authController.makeToken,
        authController.addAuth
       );
  
  //update users
       app.route('/edit/auth')
       .post(
        authController.editAuth
       );
  
   
    ////////Terms Model////////
    //show all Terms
    app.route('/find/all/term')
    .get(
       registerController.findTerm
    );
  
  //add a new Term
    app.route('/new/term')
       .post(
        registerController.addTerm
       );
 
  
    } 
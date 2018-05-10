const userController=require('./controller/userController');
const feeController=require('./controller/feeController');
const authController=require('./controller/authController');

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
      feeController.find
  );

//add a new FEE
  app.route('/new/fee')
     .post(
feeController.addUser
     );

//update FEE
     app.route('/edit/fee')
     .post(
feeController.editUser
     );



  /////////auth table////////
    //show all users
    app.route('/find/all/auth')
    .get(
        authController.find
    );
  
  //add a new users
    app.route('/new/auth')
       .post(
        authController.addUser
       );
  
  //update users
       app.route('/edit/auth')
       .post(
        authController.editUser
       );
  
    }
let models = require('../models');

exports.create_user =  function(req, res, next) {
    
     models.User.create({
      email:req.body.email,
      username: req.body.username,
      firstbname:req.body.firstname,
      lastname:req.body.lastname,
      password:req.body.password
    }).then ( userData => {
      if(userData) {
      res.status(201).json({
        success: true,
        message: 'User successfully created',
        userData
      })
      }
      else{
        res.status(500).json({"Message": "Error creating new"})
      }
    }).catch(error => res.status(400).send(error));
}
exports.show_users = function(req,res,next){
   models.User.findAll()
  .then( data => {
    if(data){
     
    res.status(200)
            .json({ data });
    }
    else {
      res.status(400)
            .json({ "Message" : "No data found" });
    }
  })
  
}

exports.show_user =function(req,res,next){
  models.User.findOne({
     where:{
         id:req.params.id
     }

 }) .then ( user => {
   if(user){
     res.status(200).json(user);
   }
   else{
     res.status(400).json({"Message" : "No data found"})
   }
 })
}


exports.edit_user = function(req,res,next){
  return models.User.update({
      email:req.body.email,
      username: req.body.username,
      firstbname:req.body.firstname,
      lastname:req.body.lastname,
      password:req.body.password

  },
  {
      where:{
          id:req.params.id
      }
  }).then( updatedUser => {
    res.status(200).json({
      message: 'User updated successfully',
      data: req.body || updatedUser
    })
  }).catch(error => res.status(400).json(error));
}
let models = require('../models');

exports.create_user =  function(req, res, next) {
    
    return models.User.create({
      email:req.body.email,
      username: req.body.username,
      firstbname:req.body.firstname,
      lastname:req.body.lastname,
      password:req.body.password
    });
}
exports.show_users = function(req,res,next){
  return models.User.findAll();
}

exports.show_user =function(req,res,next){
 return models.User.findOne({
     where:{
         id:req.params.id
     }

 });
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
  });
}
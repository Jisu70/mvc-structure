
// HANDLER LOGIS ARE PLACED IN CONTROLLER ROUTE

const users = require('../models/users.model');
// const { patch } = require('../routes/user.route');
const path = require('path')

exports.getUser = (req, res) => { 
  res.sendFile(path.join(__dirname + "/../views/index.html"))
}

exports.postUser = (req, res) => {
  const name = req.body.name ;
  const age = Number(req.body.age) ;
  const userObject = {
    id : users.length+1,
    name,
    age
  }
  users.push(userObject)
  res.status(201).json({
    success : true ,
    users
  })
}

exports.findUser =  (req, res) => {
  const userId = req.params.id; 
  console.log(userId)

  const user = users.find(data => data.id === parseInt(userId));
  
  if (user) {
    res.send(user);
  } else {
    res.status(404).json({
      message: "Resource not found"
    });
  }
}

exports.notFoundRoute = (req, res, next) => {
  res.status(404).json({
    message : " resource not found "
  })
}
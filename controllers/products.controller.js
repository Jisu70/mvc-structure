
// HANDLER LOGIS ARE PLACED IN CONTROLLER ROUTE

const products = require('../models/products.model');
// const { patch } = require('../routes/user.route');
const path = require('path')

exports.getProducts = (req, res) => { 
  res.sendFile(path.join(__dirname + "/../views/index.product.html"))
}

exports.postUserProducts = (req, res) => {
  const products = req.body.productname ;
  const price = Number(req.body.productprice) ;
  const productObject = {
    id : users.length+1,
    products,
    price
  }
  console.log(productObject)
  products.push(productObject)
  res.status(201).json({
    success : true ,
    products
  })
}

exports.findProducts =  (req, res) => {
  const productId = req.params.id; 
  const user = users.find(data => data.id === parseInt(productId));
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
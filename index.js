const express = require('express') ;

const app = express() ;

const PORT = 3000 ;

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : true }))

const userRouter = require("./routes/user.route")

const productRoute = require("./routes/product.route")

app.use(productRoute) ;

app.use(userRouter) ;

app.listen(PORT,(err) => {
  if (err) throw err ;
  console.log(` app listen on ${PORT}`)
})
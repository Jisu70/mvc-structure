const express  = require('express'); 

const { postUserProducts, getProducts, notFoundRoute, findProducts } = require('../controllers/products.controller')

const router = express.Router()

router.get('/product', getProducts)

router.post('/userproduct', postUserProducts)

router.get('/product/:id', findProducts);

router.use(notFoundRoute)

module.exports = router ;
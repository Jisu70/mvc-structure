const express  = require('express'); 
const { getUser, postUser, findUser, notFoundRoute } = require('../controllers/users.controller');
const router = express.Router()



router.get('/', getUser)

router.post('/user', postUser)

router.get('/users/:id', findUser);

router.use(notFoundRoute)

module.exports = router ;
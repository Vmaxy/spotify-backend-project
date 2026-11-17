const express =  require('express')
const router = express.Router(); 
const authcontroller = require('../auth.controllers/auuth.contollers')

router.post('/register', authcontroller.register)
router.post('/login', authcontroller.loginUser)
router.post('/logout', authcontroller.logout)
module.exports = router
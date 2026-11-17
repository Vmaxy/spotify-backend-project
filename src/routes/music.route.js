const express = require('express')
const router = express.Router();
const {createMusic} = require('../auth.controllers/music.control')
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() })

router.post('/upload',upload.single('music'),createMusic) 




module.exports = router
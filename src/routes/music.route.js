const express = require('express')
const router = express.Router();
const {createMusic} = require('../auth.controllers/music.control')
const multer = require('multer');
const { authMiddleware } = require('../middleware/middleware');

const upload = multer({ storage: multer.memoryStorage() })

router.post('/upload',upload.single('music'),createMusic) 
router.post('/create',upload.single('coverImage'),createAlbum)
router.post('/get',authMiddleware.authuser, getMusicToAlbum)


module.exports = router
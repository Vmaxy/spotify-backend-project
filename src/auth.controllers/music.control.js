const musicModel = require('../models/music.model')
const albumModel = require('../models/album.model')
const {uploadFile} = require('../services/storage.service')
const jwt = require('jsonwebtoken')


async function createMusic(req,res) 
{
    const token = req.cookies.token

    if (!token)
    {
        return  res.status(401).json({message : "unauthorized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_AUTH)
        if (decoded.role !== 'artist') {
            return res.status(403).json({message :"you dont have permission to create music"})
        }
    
 const {title} = req.body;
 const file = req.file

 const uploadResult = await uploadFile(file.buffer.toString('base64'))
 const music =  await musicModel.create({
    uri: uploadResult.url,
    title,
    artist: decoded.id
 })
 res.status(201).json({message : "music created successfully", music:{
    id: music._id,
    title: music.title,
    uri: music.uri,
    artist: music.artist
 }
}) }

 catch (err) {
        console.error(err)
        res.status(500).json({message : "internal server error"})
    }

}

async function addMusicToAlbum(req,res) {
    const token = req.cookies.token

    if (!token)
    {
        return  res.status(401).json({message : "unauthorized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_AUTH)
        if (decoded.role !== 'artist') 
            {
            return res.status(403).json({message :"you dont have permission to add music to album"})
        }
    
 const {title,musicId} = req.body;
    }  catch (err) {
        console.error(err)
        res.status(401).json({message : "unauthorized"})
    }
 const album = await albumModel.create({
    title,
    musics: [musicId],
    artist: decoded.id
 })
 res.status(201).json({message : "album created successfully", album:{
    id: album._id,
    title: album.title,
    musics: album.musics,
    artist: album.artist
 }
}) }


module.exports = {createMusic}
const UserModel= require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function loginUser (req,res) {
    const {username,email,password} = req.body;

    const user = await UserModel.findOne({
        $or :[
            {username},
            {email}
        ]
    })
    if (!user) {
        return res.status(404).json({message:"user not found"})
    }
    
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if (!isPasswordValid) {
        return res.status(401).json({message:"invalid password"})
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role,
    }, process.env.JWT_AUTH)
    res.cookie("token",token)

    res.status(200).json({
        message:"user login sucessfully",
        user:{
            id:user._id,
           username:user.username ,
           email : user.email,
           role: user.role
        }
    })

}


async function register(req,res) {
    const { username, email, password , role ='user'} = req.body;
    const ifUserAlreadyExit = await UserModel.findOne({
        $or :[
            {username}, 
            {email}
        ]

    })
    if (ifUserAlreadyExit) {
        return res.status(409).json({message: "user already exist"} )

    }
    const hash = await bcrypt.hash(password,10)


    const user = await UserModel.create({
        username,
        email,
        password : hash,
        role,
    })

    const token = jwt.sign({
        id:user._id,
        role:user.role,
    }, process.env.JWT_AUTH)
    res.cookie("token",token)

    res.status(201).json({
        message:"user register sucessfully",
        user:{
            id:user._id,
           username:user.username ,
           email : user.email,
           role: user.role
        }
    })





}



module.exports = {register,loginUser}
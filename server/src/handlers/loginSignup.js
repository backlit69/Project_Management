const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{
    const {name, username, email, password} = req.body
    let user1 = await User.findOne({email:email})
    if(user1){
        res.send({status:400, message: "email already registered!!"})
    }
    else{
        user1 = await User.findOne({username: username})
        if(user1){
            res.send({status: 400, message:"username already taken!!"})
        }
        else{
            const user = new User({
                name,
                username,
                email,
                password
            })
            await user.save().then(()=>{
                res.send({status: 200, message: "successfully registered the user"})
            }).catch((err)=>{
                res.send({status: 400, message:"some kind of error"+err});
            })
        }
    }
}


const login = async (req,res)=>{
    
    const {log, password, type} = req.body

    let existingUser
    if(type==='email')
        existingUser = await User.findOne({email: log})
    else
        existingUser = await User.findOne({username: log})
    if(existingUser){
        if(existingUser.password===password){
            const token = jwt.sign({_id: existingUser._id}, process.env.SECRET_KEY)
            res.cookie("jwt",token,{httpOnly: true})
            res.send({status: 200, message: "user successfully logged in"})
        }
        else{
            res.send({status: 400, message: "password mismatch"})
        }
    }
    else{
        res.send({status: 400, message: "wrong credentials!!"})
    }
}

const logout = function(req, res, next){
    res.cookie("jwt",undefined,{
        httpOnly:true
    })
    res.send({status: 200, message: "successful"})
}

module.exports = {register, login, logout}
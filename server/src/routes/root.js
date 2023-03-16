const express = require('express')
const User = require('../models/User')
const Project = require('../models/Project')
const rootRoute = express.Router()

rootRoute.post('/register',async (req,res)=>{
    const {name, username, email, password} = req.body
    let user1 = await User.findOne({email:email})
    if(user1){
        res.send({message: "email already registered!!"})
    }
    else{
        user1 = await User.findOne({username: username})
        if(user1){
            res.send({message:"username already taken!!"})
        }
        else{
            const user = new User({
                name,
                username,
                email,
                password
            })
            await user.save().then(()=>{
                res.send({message: "successfully registered the user"})
            }).catch((err)=>{
                res.send({message:"some kind of error"+arr});
            })
        }
    }
})

rootRoute.post('/login', async (req,res)=>{
    const {log, password, type} = req.body

    let existingUser
    if(type==='email')
    existingUser = await User.findOne({email: log})
    else
    existingUser= await User.findOne({username: log})
    if(existingUser){
        if(existingUser.password===password){
            res.send({status : 'ok' , message: existingUser})
        }
        else{
            res.send({status : 'bad' , message: "password mismatch"})
        }
    }
    else{
        res.send({status : 'bad' , message: "wrong credentials!!"})
    }
})

module.exports = rootRoute
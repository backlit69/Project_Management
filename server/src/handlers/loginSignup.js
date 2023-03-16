const express = require('express')
const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{
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
                res.send({status: 200,message: "successfully registered the user"})
            }).catch((err)=>{
                res.send({status: 400, message:"some kind of error"+arr});
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
            // const token = jwt.sign({_id: existingUser._id}, process.env.SECRET_KEY)
            // res.cookie("jwt",token,{httpOnly: true})
            let projects=[];
            for(const ele of existingUser.projects){
                let existingProject = await Project.findOne({_id: ele.project})
                let project;
                if(existingProject.leaders.includes(existingUser._id)){
                    project=existingProject;
                }
                else{
                    userTasks = existingProject.tasks.get(existingUser._id.toString())
                    project = {
                        name: existingProject.name,
                        description: existingProject.description,
                        creator: existingProject.creator,
                        leaders: existingProject.leaders,
                        discussion: existingProject.discussion,
                        tasks: userTasks,
                        members: existingProject.members.present
                    }
                }
                projects.push(project);
            };
            let response={name: existingUser.name,
                email: existingUser.email,
                username: existingUser.username,
                notes: existingUser.notes,
                notification: existingUser.notifications,
                projects: projects
            }
            res.send(response);
        }
        else{
            res.send({message: "password mismatch"})
        }
    }
    else{
        res.send({message: "wrong credentials!!"})
    }
}

module.exports = {register, login}
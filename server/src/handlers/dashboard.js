const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')
const Task = require('../models/Task');

const dashboard = async (req,res)=>{
    const user = await jwt.verify(req.get("authorization"), process.env.SECRET_KEY)
    existingUser = await User.findOne({_id: user._id})
    let projects=[];
    for(const ele of existingUser.projects){
        let existingProject = await Project.findOne({_id: ele.project})
        let userTasks;
        if(existingProject.leaders.includes(existingUser._id)){
            userTasks = await Task.find({projectId: existingProject._id});
        }
        else{
            userTasks = await Task.find({projectId: existingProject._id, userId: user._id});
        }
        
        let project = {
            name: existingProject.name,
            description: existingProject.description,
            creator: existingProject.creator,
            leaders: existingProject.leaders,
            discussion: existingProject.discussion,
            tasks: userTasks,
            members: existingProject.members.present
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
    res.send({status:200, message: response});
}

module.exports = {dashboard}
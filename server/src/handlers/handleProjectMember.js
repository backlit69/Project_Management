const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');

const addMemberRequest = async(req,res)=>{
    try{   
        const user = await jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        const {projectId, userId} = req.body;
        const project_leaders = await Project.findOne({_id: projectId},'leaders')
        if(project_leaders.leaders.includes(user._id)){
            const projectName = await Project.findOne({_id: projectId},'name')
            const inviteeName = await User.findOne({_id: user._id},'name')
            let text = `${inviteeName} has requested you to join ${projectName}`
            let obj = {
                category: "invite",
                invite: {
                    leaderId: user._id,
                    projectId: projectId
                },
                text: text
            }
            await User.findOne({_id: userId},{$push: {notification: obj}})
            res.send({status: 200, message: "successfully sent an invitation"})
        }
        else{
            res.send({status: 400, message: "not a leader"})
        }
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const addMemberResponse= async(req,res)=>{
    try {
        const user = await jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        const {projectId, leaderId, response, notificationId} = req.body;
        User.findOneAndUpdate({_id: user._id},{$pull: {notification: {_id: notificationId}}})
        const projectName = await Project.findOne({_id: projectId},'name')
        const inviteeName = await User.findOne({_id: leaderId},'name')
        const username = await User.findOne({_id: user._id},'name')
        let text1, text2;
        if(response==="accept"){
            text1= `you have joined the project ${projectName} invited by ${inviteeName}`
            text2=`${username} invited by you has joined the project ${projectName}`
        }
        else if(response==="decline"){
            text1= `you have declined to join the project ${projectName} invited by ${inviteeName}`
            text2=`${username} invited by you has declined the request to join the project ${projectName}`
        }
        User.findOneAndUpdate({_id: user._id},{$push:{notification: {category: "text", text: text1}}})
        User.findOneAndUpdate({_id: leaderId}, {$push: {notification: {category: "text", text: text2}}})
        Project.findOneAndUpdate({_id: projectId},{$push:{'members.present': _id}})
    } catch (err) {
        console.log(err)
        res.send({status: 400, message: "something went wrong"})        
    }
}

const removeMember = async (req, res)=>{
    try{
        const user = await jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {projectId,userId} = req.body;
        project = await Project.findOne({_id: projectId})
        if(project.leaders.include(user._id)){
            await Project.findOneAndUpdate({_id: projectId}, {$pull: {'members.present': {userId}}})
            await Project.findOneAndUpdate({_id: projectId}, {$push: {'members.past' : {userId}}})
            await Task.deleteMany({userId: userId, status: "incomplete"})
        }
        else{
            res.send({status: 400, message: "failed because user requesting it is not a leader"})
        }
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const replaceMember = async(req, res)=>{
    try{
        const user = await jwt.verify(req.get('authorization'). process.env.SECRET_KEY)
        const {projectId, userId, newUserId} = req.body
        project = await Project.findOne({_id: projectId})
        if(project.leaders.include(user._id)){
            const {members} = await Project.findOne({_id: projectId},{'members.present': 1, _id: 0});
            if(members.present.include(newUserId)){
                await Project.findOneAndUpdate({_id: projectId}, {$pull: {'members.present': {userId}}})
                await Project.findOneAndUpdate({_id: projectId}, {$push: {'members.past' : {userId}}})
                await Task.updateMany({userId: userId, status: "incomplete"},{userId: newUserId})
                res.send({status:200, message: "succefully sent all the completed task to the new member"})
            }
            else{
                res.send({status: 400, message:"unsuccessful because the member is not yet invited to the project"})
            }
        }
        else{
            res.send({status: 400, message: "failed because user requesting it is not a leader"})
        }
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const makeLeader = async (req,res)=>{
    try {
        const user = await jwt.verify(req.get('authorization'). process.env.SECRET_KEY)
        const {projectId, userId} = req.body
        project = await Project.findOne({_id: projectId})
        if(project.creator!==user._id){
            const {members} = await Project.findOne({_id: projectId},{'members.present': 1, _id: 0});
            if(members.present.include(userId)){
                await Project.findOneAndUpdate({_id: projectId}, {$push: {leaders: {userId}}})
                res.send({status: 200, message: "members not present in the project"})
            }
            else{
                res.send({status: 400, message: "member not present in the project"})
            }
        }
        else{
            res.send({status: 400, message: "project creator can only select leaders"})
        }
    } catch (err) {
        console.log(err)
        res.send({status: 400,message: "something went wrong"})
    }
}

module.exports = {addMemberRequest, addMemberResponse, removeMember, replaceMember, makeLeader}
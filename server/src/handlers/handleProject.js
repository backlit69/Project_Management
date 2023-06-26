const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');
const { mongoose } = require('mongoose');

const createProject = async (req, res)=>{
    try{
        const {name, description} = req.body
        const user = await jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        const creator = user._id    
        let project = new Project({
            name: name,
            description: description,
            creator: creator,
            leaders: [creator],
            discussion: [],
            members: {
                present: [creator],
                past: []
            }
        })
        await project.save().then(async (response)=>{
            let rid=response._id.toString();
            console.log(rid);
            let usr=await User.findOneAndUpdate({_id: creator},{$push: {projects: {project: new mongoose.Types.ObjectId(rid)}}},{new: true})
            console.log(usr)
            res.send({status: 200, message: response})
        }).catch((err)=>{
            console.log(err)
            res.send({status:400, message:"something went wrong"})
        })
    }
    catch(err){
        console.log(err)
        res.send({status:400, message:"something went wrong"})
    }
}

const delProject = async(req,res)=>{
    try{
        const {projectId} = req.body;
        const user = await jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        console.log(projectId);
        const project = await Project.findOne({_id: projectId})
        if(user._id.toString()===project.creator.toString()){
            for(const usr of project.members.present){
                console.log(usr)
                console.log(projectId)
                await User.findOneAndUpdate({_id: usr},{$pull: {projects : {project: projectId}}},{new:true})
            }
            for(const usr of project.members.past){
                await User.findOneAndUpdate({_id: usr},{$pull: {projects : {project: projectId}}})
            }
            await Task.deleteMany({projectId: projectId});
            await Project.deleteOne({_id:projectId})
            res.send({status: 200, message: "deleted successfully"})
        }
        else{
            res.send({status: 400, message: "not the creator"})
        }
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong while deleting the project"})
    }
}

module.exports = {createProject,delProject}
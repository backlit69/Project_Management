const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
const Task = require('../models/Task')

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
            await User.findOneAndUpdate({_id: creator},{$push: {project: response._id}})
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
        const project = await Project.findOne({_id: projectId})
        if(user._id.toString()===project.creator.toString()){
            for(const usr of project.present){
                await User.findOneAndUpdate({_id: usr},{$pull: {[projects._id] : project._id}})
            }
            for(const usr of project.past){
                await User.findOneAndUpdate({_id: usr},{$pull: {[projects._id] : project._id}})
            }
            await Task.deleteMany({projectId: project._id});
            Project.deleteOne({_id:projectId})
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
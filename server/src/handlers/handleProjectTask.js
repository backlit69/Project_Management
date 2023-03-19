const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');

const addTask = async (req, res)=>{
    try {
        const user = jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {projectId, userId, name, deadline, description} = req.body

        const {leaders} = await Project.findOne({_id: projectId},{leaders: 1, _id: 0})
        if(leaders.include(user._id)){
            const task = new Task({
                userId,
                projectId,
                name,
                deadline,
                description,
                status:"incomplete",
                assignerId: user._id,
                updates: []
            })
            task.save().then(()=>{
                res.send({status: 200, message: "task added successfully to the user"})
            }).catch((err)=>{
                console.log(err)
                res.send({status: 400, message: "unknown error task not added"})
            })
        }
        else{
            res.send({status: 400, message: "the user is not a leader so cant assign task"})
        }
    } catch (err) {
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const completeTask = async(req, res)=>{
    try {
        const user = jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        const {taskId} = req.body;
        const {username} = await User.findOne({_id: user._id},{username: 1, _id: 0})

        const task = await Task.findOneAndUpdate({_id: taskId},{status: "complete"}, {new: true})
        const {name} = Project.findOne({_id: task.projectId},{name:1, _id:0})
        let text = `${username} has completed the task ${task.name} assigned to him on project ${name}`
        await User.findOneAndUpdate({_id: task.assignerId}, {$push: {notes: {text: text}}})
        res.send({status: 200, message: "succesfully completed the task"})
    } catch (err) {
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const removeTask = async(req,res)=>{
    try {
        const user = jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {taskId} = req.body

        const {leaders} = await Project.findOne({_id: projectId},{leaders: 1, _id: 0})
        if(leaders.include(user._id)){
            const task = await Task.findOne({_id: taskId})
            if(task.status==="incomplete"){
                await Task.deleteOne({_id: taskId})
                res.send({status: 200, message:"deleted the incompleted task as no longer needed"})
            }
            else{
                res.send({status: 400, message: "task already completed can't be deleted"})
            }
        }
        else{
            res.send({status: 400, message: "request not sent from a leader"})
        }
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

module.exports = {addTask, completeTask, removeTask}
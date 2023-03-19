const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');

const addTask = async (req, res)=>{
    try {
        const user = jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {projectId, userId, task, deadline, name, description} = req.body

        const {leaders} = await Project.findOne({_id: projectId},{leaders: 1, _id: 0})
        if(leaders.include(user._id)){
            
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
        const {taskId, projectId} = req.body;
        const username = await User.findOne({_id: user._id},'name')

        let text = `${username} has completed the task assigned to him on `
    } catch (err) {
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

module.exports = {addTask, completeTask}
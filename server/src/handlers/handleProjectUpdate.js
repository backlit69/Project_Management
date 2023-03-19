const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
const Task = require('../models/Task')

const addUpdate = async (req, res)=>{
    try {
        const user = jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {taskId,name,deadline,description} = req.body
        let obj = {
            name,
            deadline,
            description,
            status: "incomplete"
        }
        await Task.findOneAndUpdate({_id: taskId},{$push: {updates: obj}})
        res.send({status: 200, message: "added the task successfully"})
    } catch (err) {
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const removeUpdate = async(req,res)=>{
    try{
        const user = jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {updateId} = req.body
        await Task.findOneAndUpdate({updates:{$elemMatch: {_id: updateId}}},{$pull:{updates: {_id: updateId}}})
        res.send({status: 200,message: "removed the update successfully"})
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

const completeUpdate = async(req, res)=>{
    try{
        const user = jwt.verify(req.get('authorization'),process.env.SECRET_KEY)
        const {updateId} = req.body
        await Tasks.findOneAndUpdate({updates:{$elemMatch: {_id: updateId}}},{$set :{[`updates.$[outer].status`]: 'complete'}},{
            "arrayFilters": [{"outer._id":updateId}],
            new: true
        })
        res.send({status: 200, message: "update completed"})
    }
    catch(err){
        console.log(err)
        res.send({status: 400, message: "something went wrong"})
    }
}

module.exports = {addUpdate, completeUpdate, removeUpdate}
const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    status:{
        type: String
    },
    userId : {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        ref: 'projects'
    },
    assignerId: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    deadline: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    updates: [{
        type: new mongoose.Schema({
            deadline: {
                type: Date,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        },{timestamps: true})
    }]
},{timestamps: true})

const Task = mongoose.model('task',taskSchema)

module.exports = Task
const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    discussion: [{
        type: String
    }],
    leaders: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
    members: {
        present: [{
            type: mongoose.Types.ObjectId,
            ref: 'users'
        }],
        past: [{
            type: mongoose.Types.ObjectId,
            ref: 'users'
        }]
    }
})

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
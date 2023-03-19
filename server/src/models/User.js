const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    projects : [{
        type: new mongoose.Schema({
            project: {
                type: mongoose.Types.ObjectId,
                ref: 'projects'
            }
        },{timestamps: true})
    }],
    prev_projects : [{
        type: new mongoose.Schema({
            project:{
                type: mongoose.Types.ObjectId,
                ref: 'projects'
            }
        })
    }],
    notes : [{
        type: new mongoose.Schema({
            text: {
                type: String,
                required: true
            }
        },{timestamps: true})}],
    notifications: [{
        type: new mongoose.Schema({
            category: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            invite: {
                leaderId: {
                    type: String,
                },
                projectId: {
                    type: String,
                }
            }
        },{timestamps: true})}]
},{timestamps: true})

const User = mongoose.model("user", userSchema);

module.exports = User;
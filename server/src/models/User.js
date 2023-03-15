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
                type: mongoose.Schema.Types.ObjectId,
                ref: 'project',
                required: true
            }
        },{timestamps: true})
    }],
    notes : [{
        type: new mongoose.Schema({
            text: {
                type: String
            }
        },{timestamps: true})}],
    notifications: [{
        type: new mongoose.Schema({
            category: {
                type: String
            },
            text: {
                type: String
            },
            link: {
                type: String
            }
        },{timestamps: true})}]
},{timestamps: true})

const User = mongoose.model("user", userSchema);

module.exports = User;
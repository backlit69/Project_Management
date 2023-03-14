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
    projects : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    },
    notes : [{
        type: new mongoose.Schema({
            text: {
                type: String
            }
        },{timestamps: true})}],
    notification: [{
        type: new mongoose.Schema({
            category: String,
            text: {
                type: String,
            }
        },{timestamps: true})}]
})

const User = mongoose.model("user", userSchema);

module.exports = User;
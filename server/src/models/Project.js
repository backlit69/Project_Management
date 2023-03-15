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
        ref: 'user',
        required: true
    },
    discussion: [{
        type: String
    }],
    leaders: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    members: {
        present: [{
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }],
        past: [{
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }]
    },
    tasks: {
        type: Map,
        of : [{
            type: new mongoose.Schema({
                assignerId: {
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
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
                        updateId:{
                            type: String,
                            required: true
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
                        status: {
                            type: String,
                            required: true
                        }
                    },{timestamps: true})
                }]
            },{timestamps: true}),
        }]
    },
    history: {
        completed: [{
            type: new mongoose.Schema({
                userId:{
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
                },
                taskId: {
                    type: String
                },
                assignerId: {
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
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
                        updateId:{
                            type: String,
                            required: true
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
                        status: {
                            type: String,
                            required: true
                        }
                    },{timestamps: true})
                }]
            },{timestamps: true}),
        }],
        dropped: [{
            type: new mongoose.Schema({
                userId:{
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
                },
                taskId: {
                    type: String
                },
                assignerId: {
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
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
                        updateId:{
                            type: String,
                            required: true
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
                        status: {
                            type: String,
                            required: true
                        }
                    },{timestamps: true})
                }]
            },{timestamps: true}),
        }]
    }
},{timestamps: true})

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
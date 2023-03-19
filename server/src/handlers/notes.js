const User = require('../models/User')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const addNote = async (req,res)=>{
    try{
        text = req.body.text;
        const user = await jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        let obj = {text: text}
        let existingUser = await User.findOneAndUpdate({_id: user._id},{$push: {notes: obj}},{new: true})
        res.send({status: 200, message: existingUser.notes})
    }
    catch(err){
        res.send({status: 400, message: "something went wrong"})
    }
}

const delNote = async (req, res)=>{
    try{
        let _id = req.body.noteId;
        const user = await jwt.verify(req.get('authorization'), process.env.SECRET_KEY)
        let existingUser = await User.findOneAndUpdate({_id: user._id},{$pull: {notes: {_id: _id}}},{new: true})
        res.send({status: 200, message: existingUser.notes})
    }
    catch(err){
        res.send({status: 400, message: "something went wrong"})
    }
}

module.exports = {addNote, delNote}
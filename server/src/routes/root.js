const express = require('express')
const rootRoute = express.Router()
const {register, login, logout} = require('../handlers/loginSignup')
const {isLoggedIn} = require('../middlewares/auth')
const {dashboard} = require('../handlers/dashboard')
const { addNote, delNote } = require('../handlers/notes')
const { createProject, delProject } = require('../handlers/handleProject')
const { addMemberRequest, addMemberResponse, removeMember, replaceMember, makeLeader } = require('../handlers/handleProjectMember')
const { addTask, completeTask, removeTask } = require('../handlers/handleProjectTask')
const { addUpdate, completeUpdate, removeUpdate } = require('../handlers/handleProjectUpdate')

rootRoute.post('/register',register)

rootRoute.post('/login',login)

rootRoute.post('/logout',logout)

rootRoute.post('/isLoggedIn', isLoggedIn)

rootRoute.post('/dashboard', dashboard)

rootRoute.post('/dashboard/addNote', addNote)

rootRoute.post('/dashboard/delNote', delNote)

rootRoute.post('/dashboard/createProject', createProject)

rootRoute.post('/dashboard/delProject', delProject)

rootRoute.post('/dashboard/addMemberRequest', addMemberRequest)

rootRoute.post('/dashboard/addMemberResponse', addMemberResponse)

rootRoute.post('/dashboard/memberRemove', removeMember)

rootRoute.post('/dashboard/memberReplace', replaceMember)

rootRoute.post('/dashboard/makeLeader', makeLeader)

rootRoute.post('/dashboard/addTask', addTask)

rootRoute.post('/dashboard/completeTask', completeTask)

rootRoute.post('/dashboard/removeTask', removeTask)

rootRoute.post('/dashboard/addUpdate', addUpdate)

rootRoute.post('/dashboard/completeUpdate', completeUpdate)

rootRoute.post('/dashboard/removeUpdate', removeUpdate)


module.exports = rootRoute
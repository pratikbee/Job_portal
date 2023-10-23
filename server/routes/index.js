const { createJobs, getJobs } = require("./Jobs")
const {createUser,loginUser, addJob }=require("./Users")

const express = require("express")


const miniapp = express()

miniapp.post('/jobs', createJobs)
miniapp.get('/jobs', getJobs)
miniapp.post('/user', createUser)
miniapp.put("/user", addJob);
miniapp.post('/login', loginUser)


module.exports = {
    miniapp
}
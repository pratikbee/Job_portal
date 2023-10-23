const { createuser,checkuser,addjob,getsavedjob } = require("../database/Controllers")


function createUser(req, res) { 
    const { username, password } = req.body
    
    createuser(username,password).then(()=>res.send("user created")).catch(err=>console.log(err))
}

function loginUser(req,res) { 
    const { username, password } = req.body
   
    checkuser(username,password,res)
}

function addJob(req, res) { 
    const { username, job_id } = req.body
    addjob(username,job_id,res)
}

function getSavedJob(req, res) { 
    const { username } = req.body
    getsavedjob(username)
}

module.exports = {
    createUser,
    loginUser,
    addJob,
    getSavedJob
}
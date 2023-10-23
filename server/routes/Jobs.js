const { creating,getting } = require("../database/Controllers")


function createJobs(req,res) { 
    const { title, company, location, description, requirements, salary, postedOn } = req.body
    
    
    creating(title, company, location, description, requirements, salary, postedOn)
    res.send("created")
    
    
}

function getJobs(req,res) { 
    getting(res)
    
}



module.exports = {
    createJobs,
    getJobs
}
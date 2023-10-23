const { Jobs } = require("./Schema")
const { Users}=require("./Schema")


async function creating( title, company, location, description, requirements, salary, postedOn ) { // for creating Job posts
  
  await Jobs.create({
    title: title,
    company: company,
    location: location,
    description: description,
    requirements: requirements,
    salary: salary,
    postedOn: new Date(),
  });
}

function getting(sendback) {  // for getting Jobs array
  Jobs.find({}).then((res)=>sendback.send(res)).catch((err)=>console.log(err))
    
}

async function createuser(username, password,cb) { 
  
  const ans = await Users.find({ name: "john", age: { $gte: 18 } }).exec();
  if (ans == []) { 
    cb.send("User")
  }
  await Users.create({
    username: username,
    password:password,
  })
}

async function checkuser(username, password,res) { 
  const user = await Users.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  if (password !== user.password) { 
      return res.status(401).json({ message: "Invalid password" });
  }

  res.status(200).json({message:"Login Successful"})
}

async function addjob(username, job_id, res) { 
  try {
    const user = await Users.findOne({ username });

    user.jobs.push(job_id)
    await user.save()
    res.status(200).json({message:"Applied for the job"})
  }
  catch (err) { 
    res.status(501).json({ err })
  } 


}

async function getsavedjob(username) { 
  try { }
  catch (err) { 
    console.log(err)
  }
}



module.exports = {
  creating,
  getting,
  createuser,
  checkuser,
  addjob,
  getsavedjob

}


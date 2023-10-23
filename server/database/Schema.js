const mongoose=require("mongoose")
const { Schema } = mongoose;

const JobsSchema = new Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  requirements: [String], 
  salary: Number,
  postedOn:Date,

});

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Jobs" }],
});

const Jobs = mongoose.model("Jobs", JobsSchema);
const Users = mongoose.model("Users", UserSchema)

module.exports = {
  Jobs,
  Users
}

const express = require("express")
const mongoose=require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')
const { miniapp } =require('./routes')

// const { creating } =require("./database/Documents")

const app=express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',miniapp)
const uri = `mongodb+srv://pratikpro1999:mongodbad@cluster0.9svetwz.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then((res) => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });



mongoose.connection.on("error", (err) => {
  console.log(err);
});



app.listen(5000, (err) => { 
    console.log("server is listening")
})

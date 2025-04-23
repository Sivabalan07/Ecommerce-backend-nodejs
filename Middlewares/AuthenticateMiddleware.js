var jwt= require('jsonwebtoken');
var User=require('../Models/User');
require('dotenv').config;
const middleware=async (req,res,next)=>{
    var user=new User();
    console.log("hello")
    user.Verify(req,res,next);   
}

module.exports=middleware
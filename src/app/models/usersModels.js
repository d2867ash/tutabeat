import mongoose, { Schema } from 'mongoose'



const userSchema =   Schema({
 
username:{
    type:String,
    required:[true,"Please enter a user name!"],
    unique:true

 },

 email:{

    type:String,
    required:[true,"Please enter a email Id!"],
    unique:true
 },

password:{
    type:String,
    requried:[true,"Please enter a password!"]
},

IsVerified:{
type:Boolean,
default:false
},

isAdmin:{
    type:Boolean,
    default:false
},

forgotPasswordToken:String,
forgotPasswordTokenExpiry:Date,
VerifyToken:String,
VerifyTokenDate:Date



});

const User =  mongoose.models.users || mongoose.model 
("users",userSchema);

export default User;
const Schema=require("../validators/zod");
const User=require("../models/user");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const signup= async(req,res)=>{
    console.log("working");
    const result=Schema.safeParse(req.body);
    if(!result.success)return res.status(400).json(result.error);
    const {email,password}=result.data;
    const existing=await User.findOne({email});
    if(existing)return res.status(400).json({message:"Email Already Exists"});
    const hashed=await bcrypt.hash(password,10);
    const user=await User.create({email,password:hashed});
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({token});
}

const signin=async(req,res)=>{
    console.log("working2");
    const result=Schema.safeParse(req.body);
    if(!result.success)return res.status(400).json(result.error);
    const {email,password}=result.data;
    const user=await User.findOne({email});
    if(!user)return res.status(400).json({message:"User Not Found"});
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({message:"Invalid Credentials"});
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({token})
}
module.exports={
    signup,
    signin
}
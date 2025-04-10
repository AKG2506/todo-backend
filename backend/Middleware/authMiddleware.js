const jwt=require("jsonwebtoken");
function auth(req,res,next){
    const token=req.headers.authorization;
    const word=token.split(" ");
    const jwttoken=word[1];
    if(!token)return res.status(401).json({messgae:"No token Provided"});
    try{
        const decoded=jwt.verify(jwttoken,process.env.JWT_SECRET);
        req.userId=decoded.id;
        // console.log(req.userId);
        next();
    }
    catch(e){
        res.status(401).json({messge:"Invalid Token"});
    }

}
module.exports=auth
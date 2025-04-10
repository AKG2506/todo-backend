const zod=require("zod");
const Schema=zod.object({
    email:zod.string().email(),
    password: zod.string().min(6)
})
module.exports=Schema
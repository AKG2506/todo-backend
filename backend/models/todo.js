const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        Required: true
    }
},{timestamps: true})
const Todo=mongoose.model("Todo",todoSchema);
module.exports=Todo
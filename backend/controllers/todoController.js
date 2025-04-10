
const Todo=require("../models/todo");

const getTodos=async(req,res)=>{
  const todos=await Todo.find({userId:req.userId});
  res.json(todos);
}
const createTodo=async(req,res)=>{
    const text=req.body.text
    const todo=await Todo.create({
       text:text,
       userId: req.userId
    });
    res.json(todo);
}
const toggleTodo=async(req,res)=>{
     const todo=await Todo.findById(req.params.id);
    //  res.json(todo.userId);
    //  if(!todo||todo.userId.toString()!==req.userId)
    //     return res.status(403).json({msg:"Unauthorized"});
    todo.isCompleted=!todo.isCompleted;
    await todo.save();
    res.json(todo);

}
const deleteTodo=async(req,res)=>{
    const todo=await Todo.findById(req.params.id);
    // if(!todo||todo.userId.toString()!==req.userId)
    //    return res.status(403).json({msg:"Unauthorized"});
    await todo.deleteOne();
    res.json({message:"Todo Deleted"});
}
module.exports={
    getTodos,
    createTodo,
    toggleTodo,
    deleteTodo
}

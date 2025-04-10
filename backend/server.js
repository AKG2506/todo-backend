const express=require("express")
const mongoose=require("mongoose")
const app=express();
const authRoutes=require("./routes/auth");
const todoRoutes=require("./routes/todo");
const dotenv=require("dotenv");
app.use(express.json());
dotenv.config();
app.use("/auth",authRoutes);
app.use("/todos",todoRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));


app.listen(3000,()=>console.log(`Server Running on port 3000`));
import express from "express"
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
//dotenv configar
dotenv.config();

//rest object
const app=express()

//database config
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth",authRoute);

// rest api
app.get('/',(req,res)=>{
    res.send("<h1>hii ganoo ganoo swaagat hai maari website par thaakoo</h1>")
})

//PORT

const PORT=process.env.PORT||8080;

//run listen

app.listen(PORT,()=>{
    console.log("server run on 8080");
})
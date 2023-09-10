import mongoose from "mongoose";

//schema

const userschema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    answer: {
        type: String,
        required: true, // Make sure this is set to true if "answer" is required.
    },
    role:{
        type:Number,
        default:0

    },
},{timestamps:true})

export default mongoose.model('user',userschema);
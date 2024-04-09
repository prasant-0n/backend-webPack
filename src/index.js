import dotenv from 'dotenv'
import connectDB from './db'
import { app } from './app'

dotenv.config({
    path:"./env"
})



connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR : ",error)
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is running in the Port: ",process.env.PORT)
    })
}

).catch((error)=>{
    console.error("MongoDB connection failed !!!", error)
})
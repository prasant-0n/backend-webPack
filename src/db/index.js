import mongoose from "mongoose";

import { DB_NAME } from "../constant";

 const connectDB= async()=>{
    try {
        const connectionInstance = await mongoose.connect(`{${process.env.MONGOSE_URI}/${DB_NAME}}`);
        console.log("MongoDb is connect to the DB Host : ",connectionInstance.connect.host)

        
    } catch (error) {
        console.error("Not Connected MongoDB by the Error : ",error);
        process.exit(1);
    }
} 


export default connectDB;
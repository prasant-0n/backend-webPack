import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
 const app = express();


//  app.use(cors());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true,
}))

// use for json data except limit
app.use(express.json({limit:'20kb'}));

//use data from the url
app.use(express.urlencoded({extended:true,limit:"20kb"}));

//use for public folder to access data inside it
app.use(express.static("public"))


// use cookie-parser
app.use(cookieParser());

 export {app}
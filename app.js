import express from 'express'
const app = express()
import connectDB from './db/connectdb.js'
import {join} from 'path'
import web from './routes/web.js'
const DATABASE_URL = 'mongodb+srv://onlinemongo:MyOnlineMongo@cluster0.v3keene.mongodb.net/?retryWrites=true&w=majority'

// MongoDB Atlas connection URI
//mongodb+srv://onlinemongo:MyOnlineMongo@cluster0.v3keene.mongodb.net/?retryWrites=true&w=majority

//Database connection
connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

//Static files
app.use('/student', express.static(join(process.cwd(), 'public')))
app.use('/student/edit', express.static(join(process.cwd(), 'public')))



//Set Template Engine
app.set('view engine', 'ejs')

//Load routes
app.use('/student', web)


const server = app.listen(3000);
const portNumber = server.address().port;
console.log(`Port is open on ${portNumber}`);
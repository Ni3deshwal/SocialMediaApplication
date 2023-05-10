import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import AuthRoute from './routes/AuthRoutes.js'
import userRoute from './routes/userRoutes.js'
import dotenv from 'dotenv'
import postRoute from './routes/postroutes.js'

dotenv.config();
//routes

const app = express();

//middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`)))
.catch((err) => console.error(err))

//usage of routes

app.use('/auth',AuthRoute)
app.use('/user',userRoute)
app.use('/post',postRoute)
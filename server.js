import express from 'express'
import taskRouter from './src/router/taskRouter.js'
const app = express()
import cors from 'cors'

import morgan from 'morgan'
import { connectMongo } from './src/config/mongoDbConfig.js'

const PORT = process.env.PORT || 8000

connectMongo()

app.use(cors())
app.use(morgan())

app.use(express.json())


app.use('/api/v1/tasks', taskRouter )

app.listen(PORT,(error)=>{
    error ? console.log(error)
    :
    console.log(
        `Server running in port : ${PORT}`
    );
})
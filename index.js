require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./database/connect');


const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)



const port = process.env.PORT || 3000;

 
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server Started on port ${port}`)})
    } catch(error) {
        console.log(error)
    }
}

start()

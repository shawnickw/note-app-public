const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router');

dotenv.config(); // connect to environment variables

const app = express(); 

app.use(cors()); // bypasses cors policy
app.use(morgan('tiny')); // logs each request

app.use(express.json()) // *important* solves TypeError issue when destructuring properties
app.use(router); // connects to router

mongoose.set('strictQuery', true); // suppress warning
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(3000);
})
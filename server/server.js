const express = require('express');
const app = new express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { dbConnect } = require('./Src/Utils/DB');

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

const port=process.env.PORT
dbConnect();
app.listen(port, () => {
    console.log(`Server is Running on Port: ${port}`)
})
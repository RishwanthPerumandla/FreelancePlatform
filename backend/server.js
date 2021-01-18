const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Port is Running on ${process.env.PORT}`))

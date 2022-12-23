require("dotenv").config()
const express = require("express")
const bodyParser = require('body-parser')
const  rateLimit = require('express-rate-limit')
const { requiresAuth } = require('express-openid-connect');
const helmet = require('helmet')
const auth0Middleware = require('./auth/auth0');
const {connectionMongoDB} = require("./db")

const logger = require("./logger/logger")
// Routes connection 
const bookRouter = require("./Routes/book.routes")
const authorRouter =  require("./Routes/author.routes")

const app = express()

const PORT = process.env.PORT 

// MOngodb connection 
connectionMongoDB()

//  Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth0Middleware);
// Book Store Route 
app.use("/api/v1/books" , requiresAuth(),bookRouter)
app.use("/api/v1/authors" , requiresAuth(),authorRouter)





// RATE liMITING FOR 15 minutes
const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// Apply the rate limiting middleware to all requests
app.use(limiter)



//security middleware using helmet 
app.use(helmet())


// Error Handler Middleware
app.use((err, req,res,  next) =>{
    // logger.error(err.message)
    console.log(err)
    const errorStatus = err.status || 5000
    res.status(errorStatus).send(err.message)
    next()
})


app.listen(PORT, () =>{
    logger.info(`Server running on port localhost:${PORT}`)
})
/**
 * 1. require an make all packages/libraries to be use in this project
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// 2. create handler to store all express features
let server = express()

//mongoose connection
mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser:true, useUnifiedTopology: true});
console.log('Successfully onnete to the database')


//create a schema
const userSchema = new mongoose.Schema({
    user_name : {type: String, unique: true},
    password : {type: String, required: 'Please enter your password'}
})

/**On multiple pages using routes eg
 * 1. products
 * 2. services
 * 3. about us
 * 4. contact us
 * 
 * 
 */
// set the engine to pik views, compile them to html then render them or serve then to the client application


server.set('view engine','pug')//using pug sets view engine
//server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true})) //calls body parser- changes file into json objects

const joinedPath = path.join(__dirname, 'views')
server.set('views', joinedPath)

// create routes through which requests an be 
server.get('/', (req, res) => {
    res.send("Hey i'm a home page")
})

//get form
server.get('/form', (req, res) => { //here register is the route
    res.render('form'); //form is name of the pug file
})

server.post('/register', (req, res) => { //here register is the route
    res.send('form - it works'); //form is name of the pug file
})

// server.post('/form', (req, res) => { //here register is the route
//     //console.log(req.body.firstname)
//     res.send('you have registered successfully'); //form is name of the pug file
// })


// server.get('/product', (req, res) => {
//     res.send("Hey i'm a product page ")
// })

// server.get('/about', (req, res) => {
//     res.send("Hey i'm about us page")
// })

// server.get('/contact', (req, res) => {
//     res.send("Hey i'm a contacts page")
// })

// server.get('/services', (req, res) => {
//     res.send("Hey i'm a serviced page")
// })


//3.  configure the server to be able to listen
server.listen(4000, () => {
    console.log('Server is listening------on 4000-------!')
})
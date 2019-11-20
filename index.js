/**
 * 1. require an make all packages/libraries to be use in this project
 */
const express = require('express')
const path = require('path')

// 2. create handler to store all express features
let server = express()

/**On multiple pages using routes eg
 * 1. products
 * 2. services
 * 3. about us
 * 4. contact us
 * 
 * 
 */

let joinedPath = path.join(__dirname, 'views')
server.set('view engine', 'pug')
server.set('views', joinedPath)

// create routes through which requests an be 
server.get('/', (req, res) => {
    res.send("Hey i'm a home page")
})


server.get('/product', (req, res) => {
    res.send("Hey i'm a product page ")
})

server.get('/about', (req, res) => {
    res.send("Hey i'm about us page")
})

server.get('/contact', (req, res) => {
    res.send("Hey i'm a contacts page")
})

server.get('/services', (req, res) => {
    res.send("Hey i'm a serviced page")
})

__

//3.  configure the server to be able to listen
server.listen(4000, () => {
    console.log('Server is listening------on 4000-------!')
})
const fs = require('fs')
const bodyParse = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
let userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = 'RAC-BOOKS-KEY'

function createToken(payload, expiresIn = '12h') {
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (error, decode) => {
        decode !== undefined ? decode : error
    })
}
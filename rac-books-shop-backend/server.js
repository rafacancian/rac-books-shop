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
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (error, decode) => {
        decode !== undefined ? decode : error
    })
}

function verifyUserExist({ email, password }) {
    return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

server.post('/public/register', (req, res) => {
    const { email, password, name, address, complement, cep } = req.body;

    if (verifyUserExist(email, password)) {
        const status = 401;
        const message = "User already registered";
        res.status(status).json({ status, message });
        return
    }

    fs.readFile("./users.json", (error, data) => {
        if (error) {
            const status = 401
            const message = error
            res.status(status).json({ status, message })
            return
        }

        const json = JSON.parse(data.toString());
        const lastItemId = json.users.length > 0 ? json.users[json.users.length - 1].id : 0;

        json.users.push({ id: lastItemId + 1, email, password, name, address, complement, cep });
        fs.writeFile("./users.json", JSON.stringify(json), (error) => {
            if (error) {
                const status = 401
                const message = error
                res.status(status).json({ status, message })
                return
            }
        });
        userdb = json;
    });

    const access_token = createToken({ email, password })
    res.status(200).json({ access_token})
})
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
let userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
let database = JSON.parse(fs.readFileSync("./database.json", "UTF-8"))

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
        return res.status(status).json({ status, message });
    }

    fs.readFile("./users.json", (error, data) => {
        if (error) {
            const status = 401
            const message = error
            return res.status(status).json({ status, message })
        }

        const json = JSON.parse(data.toString());
        const lastItemId = json.users.length > 0 ? json.users[json.users.length - 1].id : 0;

        json.users.push({ id: lastItemId + 1, email, password, name, address, complement, cep });
        fs.writeFile("./users.json", JSON.stringify(json), (error) => {
            if (error) {
                const status = 401
                const message = error
                return res.status(status).json({ status, message })
            }
        });
        userdb = json;
    });

    const access_token = createToken({ email, password })
    return res.status(200).json({ access_token })
})

server.post("/public/login", (req, res) => {
    const { email, password } = req.body;
    if (!verifyUserExist({ email, password })) {
        const status = 401;
        const message = "Email/password invalid"
        return res.status(status).json({ status, message })
    }
    const access_token = createToken({ email, password })
    let user = { ...userdb.users.find(user => user.email === email && user.password === password) }
    delete user.password
    res.status(200).json({ access_token, user })
})

server.get("/public/categories", (req, res) => {
    const slug = req.query.slug;
    if (slug !== null && slug !== undefined) {
        return res.status(200).json({ ...database.categories.find(category => category.slug === slug) }) 
    }
    return res.status(200).json(database.categories)
})

server.get("/public/books", (req, res) => {
    debugger
    console.log("req.query: " +req.query.category)
    const id = req.query.category;
    if (id !== null && id !== undefined) {
        console.log("get books by id "+id)
       let books = { ...database.books.find(book => book.category === id) }
       return res.status(200).json({books})
    }
    return res.status(200).json(database.books)
})

server.get("/public/releases", (req, res) => {
    console.log("get releases")
    let databaseResult = { ...database }
    return res.status(200).json(databaseResult.releases)
})

server.get("/public/bestsellers", (req, res) => {
    console.log("get best sellers")
    return res.status(200).json(database.bestSellers)
})

server.get("/admin/orders", (req, res) => {
    console.log("[admin] get orders")
    res.status(200).json(database.orders)
})

server.use(router)

server.listen(8000, () => {
    console.log("RAC Books Shop API Running: http://localhost:8000")
})
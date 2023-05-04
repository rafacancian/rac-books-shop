# RAC Books Shop Backend 
Backend project created with nodejs for rac books shop <br />
It is an Rest Mock API using Json Server with JWT<br />

## 🛠️ Install

```bash
$ npm install
$ npm run start-auth
```

## 🛠️ API Endpoints

### Register User
```
POST http://localhost:8000/public/register
```
body 
```
{
    "name": "Rafael Cancian",
    "email": "cancian@gmail.com",
    "password": "123456",
    "address": "Rua de lisboa",
    "complement": "Campolide",
    "cep": "1200-000"
}
```

The name and email are keys to no allow duplicate registera

### 🛠️ Login
```
POST http://localhost:8000/public/login
```
Body
```
{
  "email": "cancian@gmail.com",
  "password":"123456"
}
```
Success Response
```
{
   "access_token": "<ACCESS_TOKEN>",
   "user": { ... user data ... }
}
```

### Other requests with authentication

Add to header request
```
Authorization: Bearer <ACCESS_TOKEN>
```

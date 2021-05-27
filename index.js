require('dotenv').config()
const express = require('express')
const fs = require('fs')

const db = require('./db/db')
require('./db/relaciones')
const app = express()
const port = process.env.PORT || 4000
app.use(express.static('public'))
app.get('/test', (req, res) => {
    res.end(process.env.HOLA)
})
app.listen(port, async () => {
    try {
        await db.sync({ force: false })
        console.log('Server iniciado')
    } catch (error) {
        fs.appendFileSync('log.txt', `${error} \n \n`)
        console.log(error);
    }
})
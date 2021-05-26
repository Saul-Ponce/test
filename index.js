require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.use(express.static('public'))
app.get('/test', (req, res) => {
    res.end(process.env.HOLA)
})
app.listen(port, () => { console.log('Server iniciado') })
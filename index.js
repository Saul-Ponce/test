require('dotenv').config()
const express = require('express')
const fs = require('fs')

const db = require('./db/db')
const Telefono = require('./models/Telefono')
const Usuario = require('./models/Usuario')
require('./db/relaciones')
const app = express()
const port = process.env.PORT || 4000
app.use(express.static('public'))
app.get('/test', (req, res) => {
    res.end(process.env.HOLA)
})
app.get('/insertar-usuario/:nombre/:clave/:telefono', async (req, res) => {
    const { nombre, clave, telefono } = req.params
    try {
        const usuario = await Usuario.create({
            nombre,
            clave,
            telefono: [{ Telefono: telefono }]
        }, { include: { model: Telefono, as: 'telefono' } })
        res.json({ usuario })
    } catch (error) {
        fs.appendFileSync('log.txt', `${error} \n \n`)
        console.log(error);
        res.json({ error })
    }

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
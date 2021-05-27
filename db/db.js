const { Sequelize } = require('sequelize')
const db = new Sequelize(process.env.BD, process.env.USUARIO, process.env.PASSWORD, {
    dialect: process.env.DIALECTO,
    host: process.env.HOST
})
module.exports = db
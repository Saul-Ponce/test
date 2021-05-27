const db = require('../db/db'),
    { DataTypes } = require('sequelize')
const Usuario = db.define('usuario', {
    uid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING(30)
    },
    clave: {
        type: DataTypes.STRING(60)
    }
}, {
    tableName: 'usuarios',
    timestamps: false
})

module.exports = Usuario
const db = require('../db/db'),
    { DataTypes } = require('sequelize')
const Telefono = db.define('telefono', {
    uid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    Telefono: {
        type: DataTypes.STRING(9)
    }
}, {
    tableName: 'telefonos',
    timestamps: false
})

module.exports = Telefono
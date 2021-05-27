const Usuario = require('../models/Usuario')
const Telefono = require('../models/Telefono')
Usuario.hasMany(Telefono, { foreignKey: 'usuario_id', as: 'telefono' })
Telefono.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' })
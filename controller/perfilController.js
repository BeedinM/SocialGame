const { Usuario } = require('../database/models');

exports.conferirId = async (usuario_id) => {
    const usuario = await Usuario.findOne({
        where: {
            usuario_id
        }
    })
    
    return usuario.dataValues;
}
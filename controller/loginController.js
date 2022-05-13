const bcryptjs = require('bcryptjs');

const { Usuario } = require('../database/models')

exports.fazerLogin = async ({email, senha}) => {
    
    const usuario = await Usuario.findOne({
        where: {
            email
        }
    })
    
    if(!usuario) {
        throw new Error('Acesso negado')
    };

    const { hashed } = usuario;

    //comparar senha, ver se é válida
    const isValid = bcryptjs.compareSync(senha, hashed);

    //se não, throw error:
    if(!isValid) {
        throw new Error('Acesso negado')
    };
    
    console.log(usuario.dataValues)

    return usuario.dataValues;
}
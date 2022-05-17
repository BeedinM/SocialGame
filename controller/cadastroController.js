const bcryptjs = require('bcryptjs');

const { Usuario } = require('../database/models');

exports.fazerCadastro = async ({ nomeUsuario, email, senha, reSenha }) => {
    
    if(senha !== reSenha) {
        throw new Error('As senhas não conferem')
    };

    const hashed = bcryptjs.hashSync(senha);
    
    const usuario = await Usuario.create({
        nomeUsuario,
        hashed,
        email
    })

    return usuario;

};
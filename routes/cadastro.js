const express = require('express');
const router = express.Router();

const cadastroController = require('../controller/cadastroController');

router.get('/', (req, res, next) => {
    res.render('cadastro');
});

router.post('/', async (req, res, next) => {
    const { nomeUsuario, email, senha, reSenha } = req.body;

    const usuario = await cadastroController.fazerCadastro({ nomeUsuario, email, senha, reSenha });
    res.redirect('index');
});

module.exports = router;
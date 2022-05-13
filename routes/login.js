const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')

router.get('/', (req, res, next) => {
    res.render('login');
});

router.post('/', async (req, res, next) => {
    const { email, senha } = req.body;

    const { usuario_id: userId } = await loginController.fazerLogin({ email, senha });
    req.session.userId = userId;
    res.redirect('/perfil');
});
 
module.exports = router;
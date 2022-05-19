const express = require('express');
const router = express.Router();

const perfilController = require('../controller/perfilController');

const conferirLogin = require('../middlewares/conferirLogin');

router.get('/', conferirLogin, (req, res, next) => {
    const usuario_id = req.session.userId;
   
        const usuario = await perfilController.conferirId(usuario_id)
        res.render('perfil', {usuario});
        console.log(usuario)
});

module.exports = router;
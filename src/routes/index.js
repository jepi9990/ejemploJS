const express = require('express');
const router = express.Router();
const models = require('../models/valores')();

const Valor = require ('../models/valores');

router.get('/', async (req, res) => {
    const distribucion = await Valor.find();
    console.log(distribucion);
    res.render('index.ejs',{
        distribucion
    });
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

module.exports = router; 
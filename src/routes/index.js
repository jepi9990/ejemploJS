const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { model } = require('mongoose');
const { findOne } = require('../models/valores');
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
    res.json(valor);
});

router.get('/del/:id', async (req, res) => {
    console.log(req.params.id);
    const reg = await Valor.findByIdAndRemove(req.params.id);
    console.log(reg);
    res.redirect('/');
    //res.status(200).json(reg);
});

router.get('/up/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true };

        const reg = await Valor.findByIdAndUpdate(id, updates, options);
        res.send(reg);
    } catch (error){
        console.log(error.message);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const model = require('../models/valores')();

router.get('/', (req, res) => {
    res.render('index.ejs');
})

module.exports = router; 

router.get('/saludo',(req,res)=>{
    res.send('Hola, este es el saludo desde express')
});

router.get('/login',(req,res)=>{
    res.render('login.ejs')
});


module.exports = router;
const express = require('express');
require('dotenv').config();
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Servidor en express')
})

module.exports= router;
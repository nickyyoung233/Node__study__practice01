const path = require('path');
const root = require('../utils/root')

const express = require('express');
const router = express.Router();
let users = {};

router.get('/store', (req, res) => {
    console.log('get',req.body);
    if(!users.name){
        res.redirect('/login')
    } else {
        users = req.body;
        res.render('store', {title: '登记存入', user:users.name})
        // res.sendFile(path.join(root, 'views', 'store.html'))
    }
})
router.post('/store-reset', (req, res) => {
    console.log('post',req.body);
    users = {};
    res.redirect('/login')
})
router.post('/store', (req, res) => {
    console.log('post',req.body);
    if(req.body.name === ''){
        res.redirect('/login')
    }else {
        users = req.body;
        res.render('store', {title: '登记存入', user:users.name})
        // res.sendFile(path.join(root, 'views', 'store.html'))
    }
    // else res.sendFile(path.join(root, 'views', 'store.html'))
})

module.exports = router;
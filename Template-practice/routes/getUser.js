const path = require('path');
const root = require('../utils/root')

const express = require('express');
const router = express.Router();
const stuffs = [];
let user = '';

router.get('/', (req, res) => {
    console.log('get',req.body);
    res.render('showUser', {title: '用户仓库', stuffs: stuffs, user: user})
    // res.sendFile(path.join(root, 'views', 'showUser.html'))
})

router.post('/', (req, res) => {
    console.log('post',req.body);
    if(req.body.stuff.trim() !== '') stuffs.push(req.body.stuff);
    if(req.body.user.trim() !== '') user = req.body.user;
    console.log(stuffs,user);
    res.render('showUser', {title: '用户仓库', stuffs: stuffs, user: user})
    // res.sendFile(path.join(root, 'views', 'showUser.html'))
})

module.exports = router;
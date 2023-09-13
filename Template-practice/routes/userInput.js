const path = require('path');
const root = require('../utils/root');

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    console.log(req.url);
    if(req.url.indexOf('isLogged') > 0) {
        res.redirect('/store')
    }
    else res.render('userInput', {title: '欢迎进入'})
    // res.sendFile(path.join(root, 'views', 'userInput.html'))
})

module.exports = router;
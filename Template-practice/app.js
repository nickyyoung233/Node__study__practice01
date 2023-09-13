const path = require('path');
const root = require('./utils/root')

const express = require('express');

const userInput = require('./routes/userInput');
const getUser = require('./routes/getUser');
const store = require('./routes/store');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))  //bodyPhaser -- GET -- url
app.use(express.static(path.join(root, '/public')))  //bodyPhaser -- GET -- url

app.use(userInput);
app.use(store);
app.use(getUser);

app.use('/',(req,res) => {
    console.log('404',req.body);
    res.render('404', {
        title: '404'
    })
    // res.sendFile(path.join(root, 'views', '404.html'))
})
app.listen(3000)
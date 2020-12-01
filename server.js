const express = require('express');
const ejs = require('ejs');

const port = 3000;
const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Site on NodeJSs'
    });
});




app.listen(port, () => {
    console.log('Server is working');
})
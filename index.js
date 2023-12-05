
// Inistialization of Libraries

const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');
const port = process.env.PORT || 5000




// Middlewares

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {

    res.render('index');

});



    

app.get('/createtask', (req, res) => {

    res.render('create_task');

});


app.post('/createtask', (req, res) => {
    
})

app.listen(port, (req, res) => {
    console.log(`Server is runing.... , listening on port ${port}`);
})
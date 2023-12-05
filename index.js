
// Inistialization of Libraries

const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');
const connectdb = require('./config/connectdb');
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
const Task = require('./model/Task');
const bodyParser = require('body-parser');




// Middlewares

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async(req, res) => {

    try {
        const tasks = await Task.find();
        res.render('index', { tasks });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }

});

connectdb();



    

app.get('/task/add', (req, res) => {

    res.render('create_task');

});


app.post('/task/add', async (req, res) => {
    console.log(req.body)
    const task = new Task({ name: req.body.name });
   
  
    try {
      const newTask = await task.save();
      res.redirect('/');
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
})

// toggle completion

app.post('/toggle/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      task.completed = !task.completed;
      await task.save();
      res.redirect('/');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(port, (req, res) => {
    console.log(`Server is runing.... , listening on port ${port}`);
})
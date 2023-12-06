
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

//UPDATE 

app.route("/edit/:id").get( async (req, res) => {
  const id = req.params.id;
Task.find({}, (err, tasks) => {
res.render("edit.ejs", { todoTasks: tasks, idTask: id });})
 

})
.post((req, res) => {
const id = req.params.id;
console.log(req.body)
Task.findByIdAndUpdate(id, { name: req.body.name}, err => {
if (err) return res.send(500, err);
res.redirect("/");
});
});



// DELETE

app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  Task.findByIdAndRemove(id, err => {
  if (err) return res.send(500, err);
  res.redirect("/");
  });
  });

app.listen(port, (req, res) => {
    console.log(`Server is runing.... , listening on port ${port}`);
})
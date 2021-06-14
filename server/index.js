const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const TodoList = require('../database/Todo');
const Registration = require('../database/Authentification');

const app = express();
const PORT = 1340;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '.', 'client')));
app.use(cors());


app.get('/todos', (req, res) => {
    TodoList.find()
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => res.status(401).send(err));
});

app.post('/todos', (req, res) => {
    console.log(req.body)
    TodoList.create({ text: req.body.text, isCompleted: false })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
})

app.post('/registration', (req, res) => {
    Registration.create(req.body.user)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => console.log(err));
})

app.put('/todos/:id', (req, res) => {
    console.log(req.params.id, "body", req.body)
    TodoList.findOneAndUpdate({ _id: req.params.id }, { text: req.body.text }, { new: true })
        .then(result => {
            res.json(result);
        })
})

// app.put('/todos/:id', (req, res) => {
//     update(req.params.id)
//       .then(result => {
//         res.status(200).json(result);
//       })
//       .catch((err) => { 
//         res.status(400).send(err); 
//       });
//   });

app.delete('/todos/:id', (req, res) => {
    TodoList.remove({ _id: req.params.id })
        .then(() => {
            res.json({ message: 'Delete successfully' });
        })
        .catch(err => {
            res.send(err);
        })
})



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
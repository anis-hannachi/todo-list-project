const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const todoSchema = new mongoose.Schema({
    text: String,
    createdAt: Date,
    isCompleted: Boolean
},
    {
        timestamps: true
    }
);

const TodoList = mongoose.model('TodoList', todoSchema);

module.exports = TodoList;

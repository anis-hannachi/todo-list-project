const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const registrationSchema = new mongoose.Schema({
    id: Number,
    name: String,
    password: String,
    password_confirmations: String
},
    {
        timestamps: true
    }
);

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;

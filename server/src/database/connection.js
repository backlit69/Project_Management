const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testDB');
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ',err));

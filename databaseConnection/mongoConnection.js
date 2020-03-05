const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/afiliartUsersDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.once('open', ()=>{
    console.log('Conectado ao MongoDB..');
});

db.on('err', (err)=>{
    console.log(err);
});

module.exports = db;
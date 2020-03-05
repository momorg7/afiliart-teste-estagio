const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./databaseConnection/mongoConnection');
const bodyParser = require('body-parser');
const UsersRouter = require('./routes/UsersRouter');

app.use(db, ()=>{});
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/users', UsersRouter);

app.get('/', (req, res)=>{
    res.end('PEGOU');
});

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado na porta ${PORT}`);
});
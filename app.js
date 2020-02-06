const express = require('express');
const app = express();

const indexRoute = require('./Routes/index');
 

app.get('/', (req,res) => {
    return res.send({message: 'tudo ok com o metodo GET!'})
});

app.post('/', (req,res) => {
    return res.send({message: 'tudo ok com o metodo POST!'})
});

app.listen(3000);

module.exports = app;
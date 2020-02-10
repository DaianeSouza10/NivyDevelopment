const express = require('express');
const router = express.Router();
const Users = require('../model/user');

router.get('/', (req, res) => {
    Users.find({}, (err,data)=>{
        if (err) return res.send({error: 'Erro na consulta de usuários'});
        return res.send(data);
    });
});

router.post('/create', (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.send({ error : 'Dados insuficientes...'});

    User.findOne({email}, (err, data) => {
        if (err) return res.send({error: 'Erro na busca de usuário'});
        if (data) return res.send({error: 'Usuário já exitente'});
    Users.create(req.body, (err, data) => {
        if (err) return res.send({ error: 'Erro na criação do usuário'});
        return res.send(data);
        });
    });
});

module.exports = router;
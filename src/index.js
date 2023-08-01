const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá. Esse é o meu primeiro servidor com express!');
})

app.get('/usuarios', (req, res) => {
    const arr = [
        { id: 11, nome: 'joao', idade: 23 },
        { id: 2, nome: 'maria', idade: 18 },
        { id: 4, nome: 'ana', idade: 30 },
        { id: 1, nome: 'rodrigo', idade: 17 },
        { id: 123, nome: 'rodrigo', idade: 17 }
    ];
    res.send(arr);
})

app.listen(3000, console.log('tô rodando em http://localhost:3000/'))
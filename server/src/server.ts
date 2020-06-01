import express from 'express';

const app = express();

app.get('/users', (req, res) => {


    res.json([
        'Alan',
        'Aline',
        'Gustavo'
    ] );
});

app.listen(3333);
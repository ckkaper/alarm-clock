import express from 'express';

const app = express();

app.get('/route', (req, res, next) => {
    res.send('ok');
})

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
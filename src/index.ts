import express from 'express';
import { alarmRouter } from './controller/controller';

const app = express();

app.use(express.json());

app.get('/route', (req, res, next) => {
    res.send('ok');
});

app.use(alarmRouter);

app.listen(3000, () => {
    console.log('app listening on port 3000')
})
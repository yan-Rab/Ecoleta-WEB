import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
import routes from './routes';

app.use(express.json())
app.use(cors());
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333);
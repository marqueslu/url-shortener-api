import express, { Request, Response } from 'express';
import routes from './routes';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

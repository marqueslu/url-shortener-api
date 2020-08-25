import express, {Request, Response} from 'express';

const app = express();

app.use(express.json());

app.use('/', (request: Request, response: Response) => {
    response.json({message: 'Hello world'});
});

app.listen(3333, () => {
    console.log('Server started on port 3333!');
})
import { Router } from 'express';
import UrlsController from '../controllers/UrlsController';

const urlsRouter = Router();
const urlsController = new UrlsController();

urlsRouter.get('/:shortened', urlsController.show);
urlsRouter.post('/', urlsController.create);

export default urlsRouter;

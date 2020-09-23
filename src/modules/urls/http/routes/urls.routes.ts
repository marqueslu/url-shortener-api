import { Router } from 'express';
import UrlsController from '../controllers/UrlsController';

const urlsRouter = Router();
const urlsController = new UrlsController();

urlsRouter.get('/:shortened', urlsController.show);

export default urlsRouter;

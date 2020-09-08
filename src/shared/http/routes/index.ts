import { Router } from 'express';
import urlsRouter from '../../../modules/urls/http/routes/urls.routes';

const routes = Router();

routes.use('/urls', urlsRouter);

export default routes;

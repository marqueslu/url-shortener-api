import { Router } from 'express';

import redirectRouter from '@modules/urls/http/routes/redirect.routes';
import urlsRouter from '../../../modules/urls/http/routes/urls.routes';

const routes = Router();

routes.use('/redirect', redirectRouter);
routes.use('/urls', urlsRouter);

export default routes;

import { Router } from 'express';
import RedirectController from '../controllers/RedirectController';

const redirectRouter = Router();
const redirectController = new RedirectController();

redirectRouter.get('/:shortened', redirectController.show);

export default redirectRouter;

import {Router, Request, Response} from 'express';
import middlewares from '../middleware';
const route = Router();

export default (app: Router) => {
    app.use('/users', route);
}
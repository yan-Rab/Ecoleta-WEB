import express from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const itemsController = new ItemsController();
const pointsController = new PointsController();

const routes = express.Router();

routes.get("/items", itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/pointsId/:id',pointsController.show);
routes.get('/points', pointsController.index);

export default routes;
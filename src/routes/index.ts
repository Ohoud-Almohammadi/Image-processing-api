import express from 'express';
import { Request, Response } from 'express';
import image from '../routes/api/images';

// Create route object
const routes = express.Router();

// Create endpoint
routes.use('/images', image);
// Send error message when enter  any other route
routes.get('*', (req: Request, res: Response): void => {
  res.status(404);
  res.send('Not found !');
});
export default routes;

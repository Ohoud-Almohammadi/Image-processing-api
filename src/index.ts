// Create serve file

import express from 'express';
import routes from './routes/index';
import { Request, Response } from 'express';

// Create global App object
const app = express();
// Set port to 3000
const port = 3000;
// Create maine endpoint
app.get('/', (req: Request, res: Response): void => {
  res.send(' Welcome !');
});

app.use('/api', routes);
// Set application to listen on port 3000 and log message to console
app.listen(port, (): void => {
  console.log(`Server started at  localhost:${port}`);
});

export default app;

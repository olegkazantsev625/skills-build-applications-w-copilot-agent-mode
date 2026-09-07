import express from 'express';

import { apiBaseUrl } from './config/apiUrl';
import './config/database';
import apiRouter from './routes/api';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ apiBaseUrl, status: 'ok', service: 'octofit-tracker-api' });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});

import cors from 'cors';
import express from 'express';

import './config/database.js';
import { apiBaseUrl, serverPort } from './config/runtime.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import teamsRouter from './routes/teams.js';
import usersRouter from './routes/users.js';
import workoutsRouter from './routes/workouts.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({
    apiBaseUrl,
    port: serverPort,
    service: 'octofit-tracker-backend',
    status: 'ok'
  });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.listen(serverPort, () => {
  console.log(`OctoFit backend listening on port ${serverPort}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});
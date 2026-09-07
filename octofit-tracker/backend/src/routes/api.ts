import { Router } from 'express';

import { apiBaseUrl } from '../config/apiUrl';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const apiRouter = Router();

apiRouter.get('/users/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ displayName: 1 }).lean();
    response.json({ apiBaseUrl, users });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/teams/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 }).lean();
    response.json({ apiBaseUrl, teams });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/activities/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ activityDate: -1 }).lean();
    response.json({ apiBaseUrl, activities });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/leaderboard/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
    response.json({ apiBaseUrl, leaderboard });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/workouts/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ difficulty: 1, title: 1 }).lean();
    response.json({ apiBaseUrl, workouts });
  } catch (error) {
    next(error);
  }
});

export default apiRouter;

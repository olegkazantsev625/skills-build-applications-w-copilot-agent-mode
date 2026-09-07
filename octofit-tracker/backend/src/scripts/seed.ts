import mongoose from 'mongoose';

import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    username: 'alex-rivera',
    displayName: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    fitnessGoal: 'Improve 10K race pace',
    preferredWorkout: 'tempo running',
    joinedAt: new Date('2026-08-01T10:00:00Z'),
  },
  {
    username: 'maya-chen',
    displayName: 'Maya Chen',
    email: 'maya.chen@example.com',
    fitnessGoal: 'Build full-body strength',
    preferredWorkout: 'strength circuits',
    joinedAt: new Date('2026-08-03T12:30:00Z'),
  },
  {
    username: 'jordan-smith',
    displayName: 'Jordan Smith',
    email: 'jordan.smith@example.com',
    fitnessGoal: 'Increase weekly active minutes',
    preferredWorkout: 'cycling intervals',
    joinedAt: new Date('2026-08-05T09:15:00Z'),
  },
  {
    username: 'priya-patel',
    displayName: 'Priya Patel',
    email: 'priya.patel@example.com',
    fitnessGoal: 'Improve flexibility and recovery',
    preferredWorkout: 'mobility flow',
    joinedAt: new Date('2026-08-07T14:45:00Z'),
  },
];

const teams = [
  {
    name: 'Trail Blazers',
    mascot: 'Compass',
    city: 'Seattle',
    memberUsernames: ['alex-rivera', 'priya-patel'],
    weeklyGoalMinutes: 420,
  },
  {
    name: 'Power Circuit',
    mascot: 'Kettlebell',
    city: 'Austin',
    memberUsernames: ['maya-chen', 'jordan-smith'],
    weeklyGoalMinutes: 360,
  },
];

const activities = [
  {
    username: 'alex-rivera',
    activityType: 'Run',
    durationMinutes: 48,
    caloriesBurned: 520,
    activityDate: new Date('2026-09-01T13:00:00Z'),
    notes: 'Steady lake loop with a fast final mile',
  },
  {
    username: 'maya-chen',
    activityType: 'Strength Training',
    durationMinutes: 42,
    caloriesBurned: 310,
    activityDate: new Date('2026-09-02T18:30:00Z'),
    notes: 'Lower-body strength block and core finisher',
  },
  {
    username: 'jordan-smith',
    activityType: 'Cycling',
    durationMinutes: 55,
    caloriesBurned: 610,
    activityDate: new Date('2026-09-03T11:15:00Z'),
    notes: 'Hill repeats with controlled recovery',
  },
  {
    username: 'priya-patel',
    activityType: 'Yoga',
    durationMinutes: 35,
    caloriesBurned: 140,
    activityDate: new Date('2026-09-04T07:45:00Z'),
    notes: 'Morning mobility and breath work',
  },
];

const leaderboard = [
  { username: 'jordan-smith', teamName: 'Power Circuit', totalPoints: 940, totalMinutes: 255, rank: 1 },
  { username: 'alex-rivera', teamName: 'Trail Blazers', totalPoints: 880, totalMinutes: 231, rank: 2 },
  { username: 'maya-chen', teamName: 'Power Circuit', totalPoints: 810, totalMinutes: 218, rank: 3 },
  { username: 'priya-patel', teamName: 'Trail Blazers', totalPoints: 760, totalMinutes: 205, rank: 4 },
];

const workouts = [
  {
    title: 'Progressive 10K Tempo Builder',
    focusArea: 'Cardio endurance',
    difficulty: 'intermediate' as const,
    durationMinutes: 45,
    equipment: ['running shoes', 'timer'],
    suggestedForGoal: 'Improve 10K race pace',
  },
  {
    title: 'Foundational Strength Circuit',
    focusArea: 'Full-body strength',
    difficulty: 'beginner' as const,
    durationMinutes: 35,
    equipment: ['dumbbells', 'exercise mat'],
    suggestedForGoal: 'Build full-body strength',
  },
  {
    title: 'Climb and Recover Ride',
    focusArea: 'Cycling power',
    difficulty: 'advanced' as const,
    durationMinutes: 60,
    equipment: ['bike', 'helmet'],
    suggestedForGoal: 'Increase weekly active minutes',
  },
  {
    title: 'Evening Mobility Reset',
    focusArea: 'Flexibility',
    difficulty: 'beginner' as const,
    durationMinutes: 25,
    equipment: ['exercise mat', 'yoga block'],
    suggestedForGoal: 'Improve flexibility and recovery',
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany(users);
    await Team.insertMany(teams);
    await Activity.insertMany(activities);
    await LeaderboardEntry.insertMany(leaderboard);
    await Workout.insertMany(workouts);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

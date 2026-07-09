import 'dotenv/config';
import mongoose from 'mongoose';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Team from '../models/team.js';
import User from '../models/user.js';
import Workout from '../models/workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            Activity.deleteMany({}),
            Leaderboard.deleteMany({}),
            Team.deleteMany({}),
            User.deleteMany({}),
            Workout.deleteMany({})
        ]);
        const teams = await Team.insertMany([
            { name: 'Iron Octopus', coach: 'Maya Patel', points: 1840 },
            { name: 'Deep Sea Sprinters', coach: 'Jordan Lee', points: 1710 },
            { name: 'Harbor Hustlers', coach: 'Sam Rivera', points: 1595 }
        ]);
        const users = await User.insertMany([
            {
                email: 'ava.hart@octofit.test',
                displayName: 'Ava Hart',
                age: 29,
                role: 'captain',
                teamId: teams[0]._id
            },
            {
                email: 'noah.kim@octofit.test',
                displayName: 'Noah Kim',
                age: 34,
                role: 'member',
                teamId: teams[1]._id
            },
            {
                email: 'lina.fernandez@octofit.test',
                displayName: 'Lina Fernandez',
                age: 27,
                role: 'member',
                teamId: teams[2]._id
            }
        ]);
        await Activity.insertMany([
            {
                userId: users[0]._id,
                teamId: teams[0]._id,
                activityType: 'Strength Training',
                durationMinutes: 55,
                caloriesBurned: 420,
                completedAt: new Date('2026-07-07T08:30:00.000Z')
            },
            {
                userId: users[1]._id,
                teamId: teams[1]._id,
                activityType: 'Interval Run',
                durationMinutes: 40,
                caloriesBurned: 510,
                completedAt: new Date('2026-07-08T06:45:00.000Z')
            },
            {
                userId: users[2]._id,
                teamId: teams[2]._id,
                activityType: 'Yoga Flow',
                durationMinutes: 35,
                caloriesBurned: 180,
                completedAt: new Date('2026-07-08T18:15:00.000Z')
            }
        ]);
        await Leaderboard.insertMany([
            { rank: 1, teamId: teams[0]._id, teamName: teams[0].name, points: teams[0].points, weeklyChange: 120 },
            { rank: 2, teamId: teams[1]._id, teamName: teams[1].name, points: teams[1].points, weeklyChange: 85 },
            { rank: 3, teamId: teams[2]._id, teamName: teams[2].name, points: teams[2].points, weeklyChange: 62 }
        ]);
        await Workout.insertMany([
            {
                name: 'Power Circuit',
                focusArea: 'Full Body',
                intensity: 'High',
                durationMinutes: 45,
                recommendedFor: ['Advanced', 'Strength']
            },
            {
                name: 'Endurance Builder',
                focusArea: 'Cardio',
                intensity: 'Moderate',
                durationMinutes: 30,
                recommendedFor: ['Beginner', 'Endurance']
            },
            {
                name: 'Recovery Flow',
                focusArea: 'Mobility',
                intensity: 'Low',
                durationMinutes: 25,
                recommendedFor: ['Recovery', 'Flexibility']
            }
        ]);
        console.log('Database seeding complete');
        console.log('Seeded collections: users, teams, activities, leaderboard, workouts');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();

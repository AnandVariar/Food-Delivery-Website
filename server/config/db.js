// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const dbUrl = 'mongodb+srv://Food-App:Food-App@cluster0.yb3ojlm.mongodb.net/food-del';
    if (!dbUrl) {
        console.error('Error: No DATABASE_URL found in .env file');
        process.exit(1);
    }
    await mongoose.connect(dbUrl)
        .then(() => console.log('DB Connected'))
        .catch(err => {
            console.error('DB connection error:', err);
            process.exit(1);
        });
};

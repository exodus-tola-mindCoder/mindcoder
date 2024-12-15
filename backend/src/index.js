import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json()); // allow to extract json data out of body
app.use(cookieParser());

app.use(cors(
    {
        origin: "https://localhost:5173",
        credentials: true
    })
);

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js'

const PORT = process.env.PORT
// routes
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
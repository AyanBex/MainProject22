import express from "express";
import mongoose from "mongoose";
import config from 'config';
import authRouter from './routes/auth.routes.js';
import corsMiddleware from './middleware/cors.middleware.js';
const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleware)
app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
        const db = await mongoose.connect(config.get('dbUrl'));

        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        });
    }

start();
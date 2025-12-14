import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import workspaceRouter from './routes/workspaceRoute.js';
import { protect } from './middleware/authMiddleware.js';
import projectRouter from './routes/projectRoute.js';
import taskRouter from './routes/taskRoute.js';
import commentRouter from './routes/commentRoute.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.send('Server is live')
})

app.use("/api/inngest", serve({ client: inngest, functions }));

// Routes

app.use('/api/workspaces', protect, workspaceRouter)
app.use('/api/projects', protect, projectRouter)
app.use('/api/tasks', protect, taskRouter)
app.use('/api/comments', protect, commentRouter)

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))

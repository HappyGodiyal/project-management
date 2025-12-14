import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.send('Server is live')
})

app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))

import express from "express";
import { addMember, getUSerWorkspaces } from "../controllers/workspaceController.js";

const workspaceRouter = express.Router();

workspaceRouter.get('/', getUSerWorkspaces)
workspaceRouter.post('/add-member', addMember)

export default workspaceRouter;
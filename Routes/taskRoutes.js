import express from "express";
const router = express.Router();

import { addTask, allTasks, taskById, updateTask, deleteTask } from "../Controllers/task.js";
import {validations, errorValidatorHandler} from "../Middlewares/Validations.js";

router.get("/tasks", allTasks);
router.get("/tasks/:id", taskById);
router.post("/tasks", validations.addTask, errorValidatorHandler, addTask);
router.put("/tasks/:id", validations.updateTask, errorValidatorHandler, updateTask);
router.delete("/tasks/:id", deleteTask);


export default router;



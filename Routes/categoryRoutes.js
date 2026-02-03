import express from "express";
const router = express.Router();

import {addCategory, allCategories } from "../Controllers/category.js";
import {validations, errorValidatorHandler} from "../Middlewares/Validations.js";

router.post("/categories", validations.addCategory , errorValidatorHandler, addCategory);
router.get("/categories", allCategories);

export default router;
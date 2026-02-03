import { check, validationResult } from "express-validator";

export const validations = {
  addTask: [
    check("title")
      .notEmpty()
      .withMessage("Title is required")
      .isString()
      .withMessage("Title must be a string")
      .isLength({ min: 3, max: 100 })
      .withMessage("Title must be between 3 and 100 characters"),
    check("description")
      .optional()
      .isString()
      .withMessage("Description must be a string")
      .isLength({ max: 500 })
      .withMessage("Description cannot exceed 500 characters"),
    check("completed")
      .notEmpty()
      .withMessage("Completed is required")
      .isBoolean()
      .withMessage("Completed must be a boolean"),
    check("priority")
      .notEmpty()
      .withMessage("Priority is required")
      .isIn(["LOW", "MEDIUM", "HIGH"])
      .withMessage("Priority must be LOW, MEDIUM, or HIGH")
  ],
  allTasks: [
    check("completed")
      .optional()
      .isBoolean()
      .withMessage("Completed must be true or false")
  ],
  updateTask: [
    check("title")
      .optional()
      .isString()
      .withMessage("Title must be a string")
      .isLength({ min: 3, max: 100 })
      .withMessage("Title must be between 3 and 100 characters"),
    check("description")
      .optional()
      .isString()
      .withMessage("Description must be a string")
      .isLength({ max: 500 })
      .withMessage("Description cannot exceed 500 characters"),
    check("completed")
      .optional()
      .isBoolean()
      .withMessage("Completed must be a boolean"),
    check("priority")
      .notEmpty()
      .withMessage("Priority is required")
      .isIn(["LOW", "MEDIUM", "HIGH"])
      .withMessage("Priority must be LOW, MEDIUM, or HIGH")
  ],
  addCategory: [
    check("name")
      .notEmpty()
      .withMessage("Name is required")
      .isString()
      .withMessage("Name must be a string")
      .isLength({ min: 2, max: 100 })
      .withMessage("Name must be between 2 and 100 characters")
    ]
};

    


//error handling middleware
export const errorValidatorHandler = (req, res, next) => {
    const errors = validationResult(req); // Corrected to use validationResult
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    next(); // Proceed to the next middleware or route handler if no errors
};

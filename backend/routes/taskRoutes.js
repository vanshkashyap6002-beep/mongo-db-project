const express = require("express");
const router = express.Router();

const {
  body,
} = require("express-validator");

const validateRequest = require("../middleware/validateRequest");

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
  searchTasks,
} = require("../controllers/taskController");

// Get all tasks
router.get("/", getAllTasks);

// Search tasks
router.get("/search", searchTasks);

// Get single task
router.get("/:id", getTaskById);

// Create task
router.post(
  "/",
  [
    body("title")
      .notEmpty()
      .withMessage("Title is required"),

    body("priority")
      .optional()
      .isIn(["Low", "Medium", "High"])
      .withMessage("Invalid priority"),
  ],
  validateRequest,
  createTask
);

// Update task
router.put(
  "/:id",
  [
    body("title")
      .notEmpty()
      .withMessage("Title is required"),

    body("priority")
      .optional()
      .isIn(["Low", "Medium", "High"])
      .withMessage("Invalid priority"),
  ],
  validateRequest,
  updateTask
);

// Update task status
router.patch(
  "/:id/status",
  [
    body("status")
      .notEmpty()
      .withMessage("Status is required")

      .isIn(["Pending", "Completed"])
      .withMessage("Invalid status"),
  ],
  validateRequest,
  updateTaskStatus
);

// Delete task
router.delete("/:id", deleteTask);

module.exports = router;
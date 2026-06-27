const express = require("express");
const router = express.Router();
const checkObjectId = require("../middleware/checkObjectId");
const { body } = require("express-validator");
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

// Search Tasks
router.get("/search", searchTasks);

// Get All Tasks
router.get("/", getAllTasks);

// Get Single Task
router.get("/:id", checkObjectId, getTaskById);
// Create Task
router.post(
  "/",
  [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3 })
      .withMessage("Title should be at least 3 characters"),

    body("priority")
      .optional()
      .isIn(["Low", "Medium", "High"])
      .withMessage("Invalid priority"),

    body("status")
      .optional()
      .isIn(["Pending", "Completed"])
      .withMessage("Invalid status"),
  ],
  validateRequest,
  createTask
);

// Update Task
router.put("/:id", checkObjectId, updateTask);
// Update Status
router.patch("/:id/status", checkObjectId, updateTaskStatus);
// Delete Task
router.delete("/:id", checkObjectId, deleteTask);
module.exports = router;
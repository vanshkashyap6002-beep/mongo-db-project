const taskService = require("../services/taskService");
const {
  successResponse,
  errorResponse,
} = require("../utils/responseHandler");

// Create Task
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);

    successResponse(
      res,
      201,
      "Task created successfully",
      task
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

// Get All Tasks
const getAllTasks = async (req, res) => {
  try {

    const tasks = await taskService.getAllTasks();

    successResponse(
      res,
      200,
      "Tasks fetched successfully",
      tasks
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

// Get Single Task
const getTaskById = async (req, res) => {
  try {

    const task = await taskService.getTaskById(req.params.id);

    if (!task) {
      return errorResponse(
        res,
        404,
        "Task not found"
      );
    }

    successResponse(
      res,
      200,
      "Task fetched successfully",
      task
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

// Update Task
const updateTask = async (req, res) => {
  try {

    const task = await taskService.updateTask(
      req.params.id,
      req.body
    );

    if (!task) {
      return errorResponse(
        res,
        404,
        "Task not found"
      );
    }

    successResponse(
      res,
      200,
      "Task updated successfully",
      task
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {

    const task = await taskService.deleteTask(
      req.params.id
    );

    if (!task) {
      return errorResponse(
        res,
        404,
        "Task not found"
      );
    }

    successResponse(
      res,
      200,
      "Task deleted successfully"
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

// Update Status
const updateTaskStatus = async (req, res) => {
  try {

    const task = await taskService.updateTaskStatus(
      req.params.id,
      req.body.status
    );

    if (!task) {
      return errorResponse(
        res,
        404,
        "Task not found"
      );
    }

    successResponse(
      res,
      200,
      "Status updated successfully",
      task
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

// Search Tasks
const searchTasks = async (req, res) => {
  try {

    const keyword = req.query.keyword || "";

    const tasks = await taskService.searchTasks(
      keyword
    );

    successResponse(
      res,
      200,
      "Tasks fetched successfully",
      tasks
    );

  } catch (error) {

    errorResponse(
      res,
      500,
      error.message
    );

  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
  searchTasks,
};
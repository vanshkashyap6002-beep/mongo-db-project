const Task = require("../models/Task");

// Create a new task
const createTask = async (taskData) => {
  return await Task.create(taskData);
};

// Get all tasks
const getAllTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

// Get single task
const getTaskById = async (id) => {
  return await Task.findById(id);
};

// Update task
const updateTask = async (id, updatedData) => {
  return await Task.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

// Delete task
const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

// Update status
const updateTaskStatus = async (id, status) => {
  return await Task.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};

// Search tasks
const searchTasks = async (keyword) => {

    return await Task.find({
 $or: [

  {
 title: {
 $regex: keyword,
$options: "i"
 }
  },
  {
   description: {
  $regex: keyword,
  $options: "i"
   }
}]
  });
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
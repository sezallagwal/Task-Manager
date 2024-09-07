const { json } = require('express');
// const task = require('../models/task');
const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(201).json({ task });
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const DeleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task: null, status: 'success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const UpdateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate(taskID, req.body);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    else{
      res.status(200).json({ id: taskID, data: req.body });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  getSingleTask,
  UpdateTask,
  DeleteTask,
};

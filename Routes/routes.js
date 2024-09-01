const express= require('express')
const router = express.Router();
const {getAllTasks, createNewTask, getSingleTask, UpdateTask, DeleteTask}=require('../Controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/').post(createNewTask)
router.route('/:id').get(getSingleTask).patch(UpdateTask).delete(DeleteTask)

module.exports= router
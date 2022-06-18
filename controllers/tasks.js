const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')
const { createCustomErrors } = require('../errors/custom-errors')

const getAllTasks = asyncWrapper( async (req,res) => {
        const tasks = await Task.find({})
        res.status(200).send({tasks})
})
const createTasks = asyncWrapper( async (req,res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
})

const getSingleTask = asyncWrapper( async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task)
        {
            return next(createCustomErrors(`No task with id: ${taskID}.`, 404))
        }
        res.status(200).json({task});
})


const deleteTask = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task)
        {
            return next(createCustomErrors(`No task with id: ${taskID}.`, 404))
        }
        res.status(200).json({task});
    // res.send("Delete a task.");
})

const updateTasks = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true,
        })
        if(!task)
        {
            return next(createCustomErrors(`No task with id: ${taskID}.`, 404))
        }
        res.status(200).json({task});
})

module.exports = {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTasks,
    deleteTask,
}

// Start watching from 00:43:57 minutes
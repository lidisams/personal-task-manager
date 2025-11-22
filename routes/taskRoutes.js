// routes/taskRoutes.js

const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    // Basic validation
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required.' });
    }

    const task = new Task(req.body);
    try {
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: 'Failed to save task: ' + error.message });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve tasks: ' + error.message });
    }
});

module.exports = router;
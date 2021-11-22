const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    priority: {type: String, required: true},
    taskStatus: {type: String, required: true},
    deadline: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;
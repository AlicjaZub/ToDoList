const TasksService = require('../Services/TasksService')
const DbService = require('../Services/DbService')
const ObjectId = require('mongodb').ObjectId


async function getTasks(req, res) {
    const db = await DbService.dbConnection()
    const result = await TasksService.getAllTasks(db)
    res.json(result)
}

async function addTask(req, res) {
    let newTask = req.body
    let taskCheck = 'task' in newTask
    let completedCheck = 'completed' in newTask
    const db = await DbService.dbConnection()
    if (taskCheck && completedCheck && newTask.completed !== "" && newTask.task !== "" && typeof newTask.completed === "boolean") {
        const result = await TasksService.addTask(db, newTask)
        res.json({success: result.insertedId !== undefined})
    } else {
        res.send('Please provide data in a right format: {task: "describe the task", completed: true/false}')
    }
}

async function deleteTask(req, res) {
    const db = await DbService.dbConnection()
    const id = req.params.id
    if (id.length === 24) {
        const result = await TasksService.deleteTask(db, ObjectId(id))
        res.json({success: result.deletedCount === 1})
    } else {
        res.send('Please provide a valid ID')
    }
}

async function updateTask(req, res) {
    const db = await DbService.dbConnection()
    const id = req.params.id
    const completedUncompleted = req.body.completed
    if (id.length === 24) {
        const result = await TasksService.updateTask(db, ObjectId(id), completedUncompleted)
        res.json({success: result.modifiedCount === 1})
    } else {
        res.send('Please provide a valid ID')
    }
}

module.exports.getTasks = getTasks
module.exports.addTask = addTask
module.exports.updateTask = updateTask
module.exports.deleteTask = deleteTask


async function getAllTasks(db) {
    const collection = db.collection('tasks')
    return collection.find({}).sort({completed: -1}).toArray()
}

async function addTask(db, newTask) {
    const collection = db.collection('tasks')
    return collection.insertOne(newTask)
}

async function deleteTask(db, id) {
    const collection = db.collection('tasks')
    return collection.deleteOne({_id: id})
}

async function updateTask(db, id, completedUncompleted) {
    const collection = db.collection('tasks')
    return collection.updateOne({_id: id}, {$set: {completed: completedUncompleted}})
}

module.exports.getAllTasks = getAllTasks
module.exports.addTask = addTask
module.exports.updateTask = updateTask
module.exports.deleteTask = deleteTask
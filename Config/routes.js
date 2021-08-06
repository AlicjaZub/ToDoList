const TasksController = require('../Controllers/TasksController')

function routes(app) {

    app.get('/tasks', TasksController.getTasks)

    app.post('/tasks', TasksController.addTask)

    app.delete('/tasks/:id', TasksController.deleteTask)

    app.put('/tasks/:id', TasksController.updateTask)

}

module.exports = routes;
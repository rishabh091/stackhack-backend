const Task = require('../modals/taskModal')

const add = (task) => {
    //initialise object of modal Task and save task sent by client in it
    const t_obj = new Task(task)
    t_obj.save(task)
}

const get = () => {
    const query = {
        completed: false
    }

    return Task.find(query)
}

const completed = (id) => {
    const query = {
        _id: id
    }

    return Task.updateOne(query, { $set: { completed: true } })
}

const update = (task) => {
    let query = {
        _id: task._id
    }

    return Task.updateOne(query, { $set: task })
}

const getCompleted = () => {
    const query = {
        completed: true
    }

    return Task.find(query)
}

const category = (filter) => {
    const query = {
        category: filter
    }

    return Task.find(query)
}

const all = () => {
    return Task.find()
}

const byPriority = (priority) => {
    const query = {
        priority: priority
    }

    return Task.find(query)
}

module.exports = {
    add: add,
    get: get,
    completed: completed,
    update: update,
    getCompleted: getCompleted,
    category: category,
    all: all,
    byPriority: byPriority
}
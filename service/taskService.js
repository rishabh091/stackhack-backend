const Task = require('../modals/taskModal')

const add = (task) => {
    //initialise object of modal Task and save task sent by client in it
    const t_obj = new Task(task)
    t_obj.save(task)
}

const get = () => {
    return Task.find({})
}

const update = (id) => {
    const query = {
        _id: id
    }

    return Task.updateOne(query, { $set: { completed: true } })
}

module.exports = {
    add: add,
    get: get,
    update: update
}
'use strict';

const _ = require('lodash');

const todolistStore = {

  todolistCollection: require('./todolist-store.json').todolistCollection,
//variable to return all todolists
  getAllTodolists() {
    return this.todolistCollection;
  },
//variable to return a todolist by it's id
  getTodolist(id) {
    return _.find(this.todolistCollection, { id: id });
  },
//variable to remove a task
  removeTask(id, taskId) {
    const todolist = this.getTodolist(id);
    _.remove(todolist.tasks, { id: taskId });
  },
};

module.exports = todolistStore;

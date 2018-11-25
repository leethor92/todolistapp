'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const todolistStore = {
  //enabled persistence through Json store
  store: new JsonStore('./models/todolist-store.json', { todolistCollection: [] }),
  collection: 'todolistCollection',
  //variable to return all todolists
  getAllTodolists() {
    return this.store.findAll(this.collection);
  },
  //variable to return todolist by id
  getTodolist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },
  //variable to add a todolist
  addTodolist(todolist) {
    this.store.add(this.collection, todolist);
  },
  //variable to remove a todolist
  removeTodoList(id) {
    const todolist = this.getTodolist(id);
    this.store.remove(this.collection, todolist);
  },
  //variable to remove all todolists
  removeAllTodolists() {
    this.store.removeAll(this.collection);
  },
  //variable to add a task
  addTask(id, task) {
    const todolist = this.getTodolist(id);
    todolist.tasks.push(task);
  },
  //variable to remove a task
  removeTask(id, taskId) {
    const todolist = this.getTodolist(id);
    const tasks = todolist.tasks;
    _.remove(tasks, { id: taskId});
  },
};

module.exports = todolistStore;

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
  //variable that returns todolists based on user
   getUserTodolists(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  //variable to add a todolist & saved to Json file
  addTodolist(todolist) {
    this.store.add(this.collection, todolist);
    this.store.save();
  },
  //variable to remove a todolist & saved to Json file
  removeTodoList(id) {
    const todolist = this.getTodolist(id);
    this.store.remove(this.collection, todolist);
    this.store.save();
  },
  //variable to remove all todolists & saved to Json file
  removeAllTodolists() {
    this.store.removeAll(this.collection);
    this.store.save();
  },
  //variable to add a task & saved to Json file
  addTask(id, task) {
    const todolist = this.getTodolist(id);
    todolist.tasks.push(task);
    this.store.save();
  },
  //variable to remove a task & saved to Json file
  removeTask(id, taskId) {
    const todolist = this.getTodolist(id);
    const tasks = todolist.tasks;
    _.remove(tasks, { id: taskId});
    this.store.save();
  },
};

module.exports = todolistStore;

'use strict';

const logger = require('../utils/logger');
const todolistStore = require('../models/todolist-store');
const uuid = require('uuid');
//variable renders todolist
const todolist = {
  index(request, response) {
    const todolistId = request.params.id;
    logger.debug('Todolist id = ', todolistId);
    const viewData = {
      title: 'Todolist',
      todolist: todolistStore.getTodolist(todolistId),
    };
    response.render('todolist', viewData);
  },
//variable to delete a task
  deleteTask(request, response) {
    const todolistId = request.params.id;
    const taskId = request.params.taskid;
    logger.debug(`Deleting Task ${taskId} from Todolist ${todolistId}`);
    todolistStore.removeTask(todolistId, taskId);
    response.redirect('/todolist/' + todolistId);
  },
//variable to add a task
  addTask(request, response) {
    const todolistId = request.params.id;
    const todolist = todolistStore.getTodolist(todolistId);
    const newTask = {
      id: uuid(),
      item: request.body.item,
    };
    logger.debug('New Task = ' , newTask)
    todolistStore.addTask(todolistId, newTask);
    response.redirect('/todolist/' + todolistId);
  },
};

module.exports = todolist;
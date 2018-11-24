'use strict';

const logger = require('../utils/logger');
const todolistStore = require('../models/todolist-store');

//renders the todolist via it's id
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

  //allows for the deletion of a task by it's id
  deleteTask(request, response) {
    const todolistId = request.params.id;
    const taskId = request.params.taskid;
    logger.debug(`Deleting Task ${taskId} from Todolist ${todolistId}`);
    todolistStore.removeTask(todolistId, taskId);
    response.redirect('/todolist/' + todolistId);
  },
};

module.exports = todolist;
'use strict';

const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const todolistStore = require('../models/todolist-store');
const uuid = require('uuid');

//variable to render dashboard that displays all todo lists
const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: 'Todolist Dashboard',
      todolists: todolistStore.getAllTodolists(),
    };
    logger.info('about to render', todolistStore.getAllTodolists());
    response.render('dashboard', viewData);
  },
 //variable that allows for deletion of todolists
 deleteTodolist(request, response) {
    const todolistId = request.params.id;
    logger.debug(`Deleting Todolist ${todolistId}`);
    todolistStore.removeTodolist(todolistId);
    response.redirect('/dashboard');
  },
  //variable that allows for adding of todolists
  addTodolist(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newTodoList = {
      id: uuid(),
      title: request.body.title,
      tasks: [],
    };
    logger.debug('Creating a new Todolist', newTodoList);
    todolistStore.addTodolist(newTodoList);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;

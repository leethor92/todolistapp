'use strict';

const logger = require('../utils/logger');
const todolistStore = require('../models/todolist-store');

//variable to render dashboard that displays all todo lists
const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Todolist Dashboard',
      todolists: todolistStore.getAllTodolists(),
    };
    logger.info('about to render', todolistStore.getAllTodolists());
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;

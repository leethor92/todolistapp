'use strict';

const logger = require('../utils/logger');
const todolistCollection = require('../models/todolist-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Todolist Dashboard',
      todolists: todolistCollection,
    };
    logger.info('about to render', todolistCollection);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;

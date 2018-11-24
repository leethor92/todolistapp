'use strict';

const logger = require('../utils/logger');

//renders about info & view
const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About Todolist',
    };
    response.render('about', viewData);
  },
};

module.exports = about;

'use strict';

const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {
//variable that renders index view, asks user to login or signup
  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },
//if login is selected, ask's user to login with email & password
  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },
//function to logout
  logout(request, response) {
    response.cookie('todolist', '');
    response.redirect('/');
  },
//if signup is selected, user is redirected to sign up
  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },
//regirst, user is added for future reference
  register(request, response) {
    const user = request.body;
    user.id = uuid();
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  },
//authenticate user password & email
  authenticate(request, response) {
    const user = userstore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie('todolist', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/dashboard');
    } else {
      response.redirect('/login');
    }
  },
//function to get user by email
  getCurrentUser(request) {
    const userEmail = request.cookies.todolist;
    return userstore.getUserByEmail(userEmail);
  },
};

module.exports = accounts;
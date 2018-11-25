'use strict';

const express = require('express');
const router = express.Router();

const accounts = require('./controllers/accounts.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const todolist = require('./controllers/todolist.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/dashboard', dashboard.index);
router.get('/dashboard/deletetodolist/:id', dashboard.deleteTodolist);
router.post('/dashboard/addtodolist', dashboard.addTodolist);

router.get('/about', about.index);
router.get('/todolist/:id', todolist.index);
router.get('/todolist/:id/deletetask/:taskid', todolist.deleteTask);
router.post('/todolist/:id/addtask', todolist.addTask);

module.exports = router;

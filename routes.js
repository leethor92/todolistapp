'use strict';

const express = require('express');
const router = express.Router();

const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const todolist = require('./controllers/todolist.js');

router.get('/', dashboard.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/todolist/:id', todolist.index);
router.get('/todolist/:id/deletetask/:taskid', todolist.deleteTask);

module.exports = router;

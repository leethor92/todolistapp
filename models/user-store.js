'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const userStore = {

  store: new JsonStore('./models/user-store.json', { users: [] }),
  collection: 'users',
  //get all stored users
  getAllUsers() {
    return this.store.findAll(this.collection);
  },
  //add a new user to be stored
  addUser(user) {
    this.store.add(this.collection, user);
  },
  //get user by id
  getUserById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },
  //get user by email
  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },
};

module.exports = userStore;
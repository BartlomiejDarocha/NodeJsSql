'use strict'

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEvent);

module.exports = {
  routes: router  
}
'use strict'

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEvent);
router.post('/events', eventController.addEvent);
router.put('/events/:id', eventController.updateEvent);

module.exports = {
  routes: router  
}
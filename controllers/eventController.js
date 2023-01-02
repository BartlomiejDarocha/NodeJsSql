'use strict'

const eventData = require('../data/events');

const getAllEvents = async (req, res, next) => {
  try {
    const eventlist = await eventData.getEvents();
    res.send(eventlist);        
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const oneEvent = await eventData.getEventById(eventId);
    res.send(oneEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

 module.exports = {
  getAllEvents,
  getEvent
 }
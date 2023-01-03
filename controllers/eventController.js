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
const addEvent = async (req, res, next) => {
  try {
    const data = req.body;
    const created = await eventData.createEvent(data);
    res.send(created)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const data = req.body;
    const upDated = await eventData.updateEvent(eventId, data);
    res.send(upDated);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

 module.exports = {
  getAllEvents,
  getEvent,
  addEvent,
  updateEvent
 }
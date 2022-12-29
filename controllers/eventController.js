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

 module.exports = {
  getAllEvents
 }
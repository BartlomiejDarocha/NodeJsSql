'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const eventsList = await pool.request().query(sqlQueries.eventslist);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getEventById = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request().input('eventId', sql.Int, eventId).query(sqlQueries.eventbyId);
        return oneEvent.recordset;
    } catch (error) {
        
    }
}

const createEvent = async (eventData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                            .input('startDate', sql.Date(100), eventData.startDate)
                            .input('endDate', sql.Date(100), eventData.endDate)
                            .input('aveneu', sql.NVarChar(200), eventData.aveneu)
                            .input('maxMembers', sql.NVarChar(200), eventData.maxMembers)
                            .query(sqlQueries.createEvent);
        return insertEvent.recordset;
    } catch (error) {
        return error.message
    }
}

const updateEvent = async(eventId, eventData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                            .input('startDate', sql.Date(100), eventData.startDate)
                            .input('endDate', sql.Date(100), eventData.endDate)
                            .input('aveneu', sql.NVarChar(200), eventData.aveneu)
                            .input('maxMembers', sql.NVarChar(200), eventData.maxMembers)
                            .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}


 module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent
 }
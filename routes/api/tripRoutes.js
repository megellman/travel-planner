const router = require('express').Router();
const { Location, Traveler } = require('../../models');

// POST route /api/trips creates trip data between associated travellers and locations

// DELETE route /api/trips/:id removes a trip
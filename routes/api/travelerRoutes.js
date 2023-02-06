const router = require('express').Router();
const { Traveler, Location } = require('../../models');

// GET route /api/travellers returns all traveller data without associated trips

// POST route /api/travellers creates traveller data

// GET route /api/travellers/:id returns a single traveller's data with their associated trips and a list of locations

// DELETE route /api/travellers/:id removes a traveller and any trips associated with them 
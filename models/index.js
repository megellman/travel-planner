const Trips = require('./trips');
const Traveler = require('./traveler');
const Location = require('./location');

Traveler.belongsToMany(Location, { 
    through: Trips, 
    foreignKey: 'traveler_id', 
    unique: false 
});
Location.belongsToMany(Traveler, { 
    through: Trips, 
    foreignKey: 'location_id', 
    unique: false 
});


module.exports = { Trips, Traveler, Location };

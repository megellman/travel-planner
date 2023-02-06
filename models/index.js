const Trips = require('./Trips');
const Traveller = require('./traveler');
const Location = require('./Location');

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


module.exports = { Trips, Traveller, Location };

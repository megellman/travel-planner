const Trips = require('./trips');
const Traveler = require('./traveler');
const Location = require('./location');

Traveler.hasMany(Trips, { foreignKey: 'traveller_id' });
Trips.belongsTo(Traveler, { foreignKey: 'traveller_id' });

Location.hasMany(Trips, { foreignKey: 'location_id' });
Trips.belongsTo(Location, { foreignKey: 'location_id' });


module.exports = { Trips, Traveler, Location };

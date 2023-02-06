const Trips = require('./Trips');
const Traveller = require('./traveler');
const Location = require('./Location');

Traveller.hasMany(Trips, { foreignKey: 'traveller_id' });
Trips.belongsTo(Traveller, { foreignKey: 'traveller_id' });

Location.hasMany(Trips, { foreignKey: 'location_id' });
Trips.belongsTo(Location, { foreignKey: 'location_id' });


module.exports = { Trips, Traveller, Location };

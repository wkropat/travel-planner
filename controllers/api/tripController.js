const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

Traveller.hasMany(Trip,{
    onDelete:"CASCADE"
});
Trip.belongsTo(Traveller);

Trip.hasMany(Location, {
    onDelete:"CASCADE"
});
Location.belongsTo(Trip);


module.exports={
    Traveller,
    Trip,
    Location
};

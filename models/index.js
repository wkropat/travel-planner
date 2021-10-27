const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

Traveller.hasMany(Trip,{
    onDelete:"CASCADE",
    foreignKey:"traveller_id"
});
Trip.belongsTo(Traveller);

Location.hasMany(Trip,{
    onDelete:"CASCADE",
    foreignKey:"traveller_id"
});
Trip.belongsTo(Location);

module.exports={
    Location,
    Traveller,
    Trip
};

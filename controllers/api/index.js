const express = require('express');
const router = express.Router();

const travellerRoutes = require("./travellerController");
router.use("/traveller",travellerRoutes);

const tripRoutes = require("./tripController");
router.use("/trip",tripRoutes);

const locationRoutes = require("./locationController");
router.use("/location",locationRoutes);

module.exports = router;
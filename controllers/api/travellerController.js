const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");


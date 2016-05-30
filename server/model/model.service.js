'use strict';

var db = require('../config/db.config.js');
var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    id_service: Number,
    id_person: String,
    name: String,
    category: String,
});
module.exports = db.model('Service', serviceSchema);

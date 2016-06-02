'use strict';

var db = require('../config/db.config.js');
var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    id_service: Number,
    id_person: String,
    name_provider: String,
    name: String,
    category: String,
    type:String,
    point: Number,
    money: Number
});
module.exports = db.model('Service', serviceSchema);

'use strict';

var db = require('../config/db.config.js');
var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    cpf: String,
    email: String,
    lat: Number,
    lng: Number,
    password: String,
    enable: Boolean, // Allow admin
    create_at: Date,
    role: String, // Admin, user or provider
    services: [{
        name: String,
        category: String
    }],
    skills: [{
        name: String,
        year: Date,
    }],
    notifications: [{
        title: String,
        id_person: String,
        type: String, // Proximidade, new contract, new user (Admin)
        distance: Number // defer between lng and lat
    }],
    calender: {
        days: [String],
        start_time: Number,
        final_hour: Number
    }
});
module.exports.Person = db.model('Person', personSchema);

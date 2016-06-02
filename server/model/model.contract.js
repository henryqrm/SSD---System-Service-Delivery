'use strict';

const db = require('../config/db.config.js');
const mongoose = require('mongoose');
let contractSchema = mongoose.Schema({
    service: String,
    id_provider: String,
    id_client: String,
    name_provider: String,
    name_client: String,
    create_at: Date,
    done_at: Date,
    enable: Boolean,
    done: Boolean,
    rating: [{
        id_person: String,
        value: Number
    }],
    cost: {
        point: Number,
        money: Number,
        tipo: String
    }
});

exports.Contract = db.model('Contract', contractSchema);

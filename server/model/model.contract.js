'use strict';

const db = require('../config/db.config.js');
const mongoose = require('mongoose');
let contractSchema = mongoose.Schema({
    id_provider: String,
    id_client: String,
    create_at: Date,
    done_at: Date,
    enable: Boolean,
    rate: [{
        id_person: String,
        value: Number
    }],
    cost: {
        point: Number,
        money: Number,
        type: Number
    }
});

exports.Contract = db.model('Contract', contractSchema);

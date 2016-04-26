'use strict';
var db = require('./config/db.config.js');
var contractSchema = db.Schema({
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

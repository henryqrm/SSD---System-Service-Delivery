'use strict';
const db = require('../model/model.contract.js');

function create(data, callback) {
    if (data.id_client !== null || data.id_provider !== null) {
        data.create_at = Date();
        data.enable = false;
        new db.Contract(data).save(function(err, contract) {
            if (err) {
                callback({
                    error: 'unexpected'
                });
            } else {
                callback(contract);
            }
        });
    }
}

function list(callback) {
    db.Contract.find({}, function(err, data) {
        if (err) {
            callback({
                error: 'Não foi possivel listar os contratos'
            });
        } else {
            callback(data);
        }
    });
}

function listProvider(id_provider, callback) {
    db.Contract.findOne({
        id_provider: id_provider
    }, function(err, data) {
        if (err) {
            callback({
                error: 'Não foi possivel listar os contratos'
            });
        } else {
            callback(data);
        }
    });
}

function listClient(id_client, callback) {
    db.Contract.findOne({
        id_client: id_client
    }, function(err, data) {
        if (err) {
            callback({
                error: 'Não foi possivel listar os contratos'
            });
        } else {
            callback(data);
        }
    });
}

exports.contract = {
    create: create,
    list: list,
    listProvider: listProvider,
    listClient: listClient
};

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

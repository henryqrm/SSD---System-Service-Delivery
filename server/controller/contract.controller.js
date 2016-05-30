'use strict';
const db = require('../model/model.contract.js');

exports.create = function(data, callback) {
    console.log(data);
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
};

exports.list = function(callback) {
    db.Contract.find({}, function(err, data) {
        if (err) {
            callback({
                error: 'Não foi possivel listar os contratos'
            });
        } else {
            callback(data);
        }
    });
};

exports.listProvider = function(id_provider, callback) {
    db.Contract.find({
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
};

exports.listClient = function(id_client, callback) {
    db.Contract.find({
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
};

'use strict';
const db = require('../model/model.contract.js');

exports.create = function(data, callback) {
    if (data.id_provider !== undefined && data.id_client !== undefined) {
        data.create_at = Date();
        data.enable = false;
        // data.rating = [{}];
        console.log("crash", data);
        new db.Contract(data).save(function(err, contract) {
            if (err) {
                callback({
                    error: err
                });
            } else {
                console.log(contract);
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

exports.getDoneContract = function(id_client, callback) {
    db.Contract.find({
        id_client: id_client,
        done: true
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
exports.closeContract = (id_contract, callback) => {
    db.Contract.findOneAndUpdate({
        '_id': id_contract
    }, {
        done_at: new Date(),
        done: true,
    }, {
        upsert: false,
        new: true
    }, function(err, doc) {
        if (err) {
            callback("Não foi possivel habilitar");
        }
        callback(doc);
    });
};

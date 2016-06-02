'use strict';
var config = require('../config/global.config');
var service = require('../model/model.service.js');



exports.list = function(callback) {
    callback(config.services);
};
exports.service = function(id, callback) {
    callback(config.services[id]);
};

exports.registerServiceProvider = (obj,callback) => {
    console.log('XXX',obj);
    service(obj).save((err, res) => {
        console.log(err);
        if (err || res === null || res === undefined) {
            callback({
                error: 'Não foi possivel salvar serviço'
            });
        } else {
        console.log(res);
            callback(res);
        }
    });
};

exports.getUserServices = function(idProvider, callback) {
    service.find({
        id_person: idProvider
    }, (err, res) => {
        if (err || res === null || res === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            callback(res);
        }
    });
};

exports.getAllServices = function(callback) {
    service.find({}, (err, res) => {
        if (err) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            callback(res);
        }
    });
};

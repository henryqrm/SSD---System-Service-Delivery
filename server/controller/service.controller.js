'use strict';
var config = require('../config/global.config');
var db = require('../model/model.person.js');

exports.list = function(callback) {
    callback(config.services);
};
exports.service = function(id, callback) {
    callback(config.services[id]);
};

exports.remove = function (id, callback) {

};

exports.userRegister = function(id, idUser, callback) {
    db.Person.findById(idUser, function(error, person) {
        if (error || person === null || person === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            var service = config.services[id];
            person.services.push(service);
            person.save(function(err, person) {
                if (error) {
                    callback({
                        error: 'Não foi possivel salvar o usuario'
                    });
                } else {
                    callback(person);
                }
            });
        }
    });
};
exports.getUserServices = function(idUser, callback) {
    db.Person.findById(idUser, function(error, person) {
        if (error || person === null || person === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            callback(person.services);
        }
    });
};

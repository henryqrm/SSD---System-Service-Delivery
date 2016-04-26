'use strict';
var serviceCtrl = require('../controller/service.controller');
var express = require('express');
var validator = require('validator');
var router = module.exports = express.Router();
router
    .get('/services', function(req, res) {
        serviceCtrl.list(function(data) {
            res.json(data);
        });
    })
    .get('/service/:id', function(req, res) {
        var id = validator.trim(validator.escape(req.param('id')));
        serviceCtrl.add(id, function(data) {
            res.json(data);
        });
    })
    .post('/service/:id/user/:idUser', function(req, res) {
        var id = validator.trim(validator.escape(req.param('id')));
        var idUser = validator.trim(validator.escape(req.param('idUser')));
        serviceCtrl.userRegister(id, idUser, function(data) {
            res.json(data);
        });
    });

'use strict';
var serviceCtrl = require('../controller/service.controller');
var express = require('express');
var router = module.exports = express.Router();
router
    .post('/api/services', function(req, res) {
        serviceCtrl.registerServiceProvider(req.body, function(data) {
            res.json(data);
        });
    })
    .get('/api/services', function(req, res) {
        serviceCtrl.list(function(data) {
            res.json(data);
        });
    })
    .get('/api/services/all', function(req, res) {
        serviceCtrl.getAllServices(function(data) {
            res.json(data);
        });
    })
    .get('/api/services/:id', function(req, res) {
        var id = req.param('id');
        serviceCtrl.getUserServices(id, function(data) {
            res.json(data);
        });
    });

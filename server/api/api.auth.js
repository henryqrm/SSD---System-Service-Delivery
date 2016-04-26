'use strict';
const authController = require('../controller/auth.controller');
const express = require('express');
const router = module.exports = express.Router();

router
    .post('/auth', function(req, res) {
        // let email = validator.trim(validator.escape(req.param('email')));
        // let password = validator.trim(validator.escape(req.param('password')));
        let email = req.body.email;
        let password = req.body.password;
        authController.login(email, password, function(person) {
            res.json(person);
        });
    });

'use strict';

const auth = require('../../server/controller/auth.controller');

jasmine.getEnv().defaultTimeoutInterval = 500;

describe('Login', function() {
    it('sucess', function(done) {
        auth.login('admin@admin.com.br', '123456', function(res) {
            done();
            expect(res.email).toBe('admin@admin.com.br');
        });
    });
    it('email errado', function(done) {
        auth.login('admin@admin.com', '123456', function(res) {
            done();
            expect(res.error).toBe('no_user');
        });
    });
    it('senha errada', function(done) {
        auth.login('admin@admin.com.br', '12345', function(res) {
            done();
            expect(res.error).toBe('no_password');
        });
    });
});

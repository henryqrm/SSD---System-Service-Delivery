'use strict';

const user = require('../../server/controller/person.controller');

jasmine.getEnv().defaultTimeoutInterval = 1500;

let userTest = {
    name: {
        first: 'Henrique',
        last: 'Rodrigues'
    },
    email: 'henrique@gmail.com',
    password: '123456',
    enable: true,
    role: 'admin',
    create_at: Date()
};

describe('Registro - ', function() {
    it('sucess', function(done) {
        user.create(userTest, function(res) {
            done();
            user.delete(res._id);
            expect(res.email).toBe('henrique@gmail.com');
        });
    });
    it('email errado', function(done) {
        userTest.email = 'henrique.gmail.com';
        user.create(userTest, function(res) {
            done();
            expect(res.error).toBe('email_incorrect');
        });
    });
    it('Sem senha', function(done) {
        userTest.email = 'henrique@gmail.com';
        userTest.password = '';
        user.create(userTest, function(res) {
            done();
            expect(res.error).toBe('no_password');
        });
    });
    it('Já registrado', function(done) {
        userTest.email = 'admin@admin.com.br';
        userTest.password = '123456';
        user.create(userTest, function(res) {
            done();
            expect(res.error).toBe('registred');
        });
    });
});

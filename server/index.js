'use strict';
const app = require('./config/app.config');
const populateDB = require('./config/seed');

const api = {
    person: require('./api/api.person'),
    service: require('./api/api.service'),
    auth: require('./api/api.auth')
};

// Rotas das APIs
app.use(api.person);
app.use(api.service);
app.use(api.auth);


// Popula o banco
populateDB.init();


// Aqui definimos nossas API's
// http://expressjs.com/en/guide/routing.html

// erros
app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(function(req, res) {
        res.sendFile('client/404.html', {
            root: __dirname
        });
    });

// Todas as rotas serão redirecionadas para o index.html
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

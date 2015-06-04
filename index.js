var Hapi = require('hapi');
var HandleBars = require('handlebars');

var server = new Hapi.Server();
server.connection({
    port: 3000
});

server.bind({
    apiBaseUrl: 'http://localhost:3000/suomen-kunnat/',
    webBaseUrl: 'http://localhost:3000/'
});

server.route(require('./routes'));

server.views({
    engines: {
        html: HandleBars
    },
    path: './views'
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
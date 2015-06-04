var Municipality = require('./handlers/municipality');

module.exports = [{
    method: 'GET',
    path: '/suomen-kunnat/{kunta}',
    handler: Municipality.find
}];

'use strict';

let http        = require('http');
let express     = require('express');
let path        = require('path');

let app         = express();
let server      = http.createServer(app);

app.use('/', express.static(path.join(__dirname, './')));

app.set('port', process.env.PORT || 1234);

server.listen(app.get('port'), function () {
    console.log('ChristmasHack running on port: ' + app.get('port'));
});


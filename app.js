var express = require('express');
var app = express();
app.use(express.static('dist/demodeploy'));
app.listen(process.env.port || 4200);

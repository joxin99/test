var express = require('express');
var app = express();

app.use('/', express.static(__dirname));

app.listen(3000, function() {
    console.log('server listen at http://localhost:3000');
});

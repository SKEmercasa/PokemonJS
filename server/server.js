const express = require('express'),
    app = express(),
    fs = require('fs'),

    options = {
        key: fs.readFileSync('key/key.pem'),
        cert: fs.readFileSync('key/cert.pem')
    },

    https = require('https').Server(options, app);

https.listen(5443, "192.168.1.100", () => {
    console.log("Server running...")
});
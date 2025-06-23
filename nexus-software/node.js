const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('../cert/key.pem'),
  cert: fs.readFileSync('../cert/cert.pem')
};

app.use(express.static('.'));

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server running at https://localhost');
});

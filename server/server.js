var https = require('https')
var fs = require('fs')

const {app} = require('./src/app')
const port = 3000
const address = 'localhost'

var options = {
    key: fs.readFileSync('keys/client-key.pem'),
    cert: fs.readFileSync('keys/client-cert.pem')
  };

let httpsServer = https.createServer(options, app)
httpsServer.listen(port, address, () => console.log(`HTTPS server at `+address+`:`+port+"\n"))

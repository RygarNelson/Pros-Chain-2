const http = require('http')

const {app} = require('./src/app')
const port = 3000
const address = 'localhost'

let httpServer = http.createServer(app)
httpServer.listen(port, address, () => console.log(`HTTP server at `+address+`:`+port+"\n"))

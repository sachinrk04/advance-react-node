const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config');
const chokidar = require('chokidar');
// const healthcheck = require('./routes/internal/healthcheck');

const app = express();
app.use(cors());

// Initialize watcher.
chokidar.watch('./build', {
    ignored: /(^|[/\\])\../, // ignore dotfiles
    persistent: true
});

// Get port from environment and store in Express
const port = config.server.port || '9090';
app.set('port', port);

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });
app.use(express.static(path.join(__dirname, '../build')));


// Get API routes
require("./routes")(app);

// Health check
// app.use(healthcheck);

console.log(`*******************************************`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`*******************************************`);
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
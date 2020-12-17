const express = require('express');
const morgan = require('morgan');
var path = require('path');
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api');
const eceRoutes = require('./routes/ece');
const outilsRoute = require('./routes/outils');
const dbRoute = require('./routes/db');

const PORT = 4500;

// INIT SERVER
const server = express();
server.use(express.urlencoded({extended: false}));  // tell express
server.use(morgan('dev'));
server.use(bodyParser.json());
server.listen(PORT, () => {
  console.log('server is running on  localhost:' + PORT);
})
// CONNECT TO DATABASE
try {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.qk7p2.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
      console.log("Connected !")
  });
} catch (error) {
    console.log(error)
    process.exit(1)
}
// add routes
server.use('/api', apiRoutes);
server.use('/ece', eceRoutes);
server.use('/outils', outilsRoute);
server.use('/db', dbRoute);

// GET
server.get("/", (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname + '/routes/pages/home.html'));
});
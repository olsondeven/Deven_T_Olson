//npm
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//files
const config = require('./config');
//app set up for express
const corsOptions = {
  origin: 'http://localhost:'+config.port
};
const app = express();

app.use(express.static(__dirname));
console.log(__dirname);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));

//export app
module.export = app;

app.listen(config.port, function(){
  console.log('listening to port: ', config.port);
});

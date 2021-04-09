const express = require('express');
const path = require('path');
const routes = require('./routes');

const server = express();
const port = '3333';
const host = 'localhost';

// template engine
server.set('view engine', 'ejs');

// mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'));

// static files
server.use(express.static('public'));

// habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }));

// routes
server.use(routes);

server.listen(port, host, () => (
  // eslint-disable-next-line no-console
  console.log(`Running on http://${host}:${port}`)));

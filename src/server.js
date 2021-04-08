const express = require('express');
const routes = require('./routes');

const server = express();
const port = '3333';
const host = 'localhost';

// template engine
server.set('view engine', 'ejs');

// static files
server.use(express.static('public'));

// habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }));

// routes
server.use(routes);

server.listen(port, host, () => (
  // eslint-disable-next-line no-console
  console.log(`Running on http://${host}:${port}`)));

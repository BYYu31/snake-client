const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print out some information when making connection to the server
  conn.on('connect', () => {
    console.log('connection established');
    //write out my initials
    conn.write('Name: BYY');
    // setTimeout(() => conn.write('Move: right'), 50);
    // setTimeout(() => conn.write('Move: right'), 50);
    // setTimeout(() => conn.write('Move: right'), 50);
    // setTimeout(() => conn.write('Move: right'), 50);
  });

  //print out the data received from server
  conn.on('data', data => console.log(data));

  return conn;
};

module.exports = { connect };
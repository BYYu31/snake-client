const { Socket } = require('dgram');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print out some information when making connection to the server
  conn.on('connect', () => {
    console.log('connection established');
    //write out my initials
    conn.write('Name: BYY');
  });

  //print out the data received from server
  conn.on('data', data => console.log(data));

  

  return conn;
};

module.exports = { connect };
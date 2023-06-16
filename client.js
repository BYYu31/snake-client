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
    // setTimeout(() => conn.write('Move: right'), 50);
    // setTimeout(() => conn.write('Move: right'), 50);
    // setTimeout(() => conn.write('Move: right'), 50);
    // setTimeout(() => conn.write('Move: right'), 50);
  });

  process.stdin.on('data', data => {
    switch (data) {
      case 'o':
        conn.write('Says: ooooh');
        break;
      
      case 'l':
        conn.write('Says: loolz');
        break;
      case 'z':
        conn.write('Says: snoozz')
    }
  });

  //print out the data received from server
  conn.on('data', data => console.log(data));

  return conn;
};

module.exports = { connect };
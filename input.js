// setup interface to handle user input from stdin

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case 'l':
    connection.write('Say: lolllz');
    break;
  case 'z':
    connection.write('Say: snooozz');
    break;
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };
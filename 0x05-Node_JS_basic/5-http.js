const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (request, result) => {
  result.statusCode = 200;
  result.setHeader('Content-Type', 'text/plain');

  const { url } = request;

  if (url === '/') {
    result.write('Hello Holberton School!');
  } else if (url === '/students') {
    result.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      result.end(`${students.join('\n')}`);
    } catch (error) {
      result.end(error.message);
    }
  }
  result.statusCode = 404;
  result.end();
});

app.listen(port, hostname, () => { });

module.exports = app;
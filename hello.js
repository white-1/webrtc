const http = require('http');
const port = 3003;

http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-type': 'text/plain',
	});
	response.end('Hello world\n');
}).listen(port);

console.log('Server running port=' + port);
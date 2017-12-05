var http = require('http');
var colors = require('colors');

function start(){
	function onRequest(request, response){
		console.log("Odebrano zapytanie!");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Pierwsze Koty za płoty!");
		response.end();
	}
	http.createServer(onRequest).listen(9000);
	console.log('Uruchomiono server!'.green);
}

exports.start = start;
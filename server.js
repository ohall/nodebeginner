/**
 * Created by Oakley Hall on 11/30/13.
 */


var http = require("http");
var url = require("url");

function start(route){
    function onrequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    };

    http.createServer(onrequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

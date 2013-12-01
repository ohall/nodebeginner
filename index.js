/**
 * Created by Oakley Hall on 12/1/13.
 */


/**
 * start server:
 * bash$ node index.js
 */

var server = require("./server");
var router = require("./router");

server.start(router.route);
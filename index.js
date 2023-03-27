var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('** I HAVE CHAGED THE CODE SENTENCE BY FORKING THE FILE FEOM RAHAM :) **'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80

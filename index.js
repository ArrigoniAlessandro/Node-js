const { request, response } = require("express");
var express = require("express"); //dichiarare utilizzo del node modules
var apiServer = express();

/* console.log("funziona");
var a = 5; 
var b = "3";
console.log(a+b); */

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, () => {
  //attiva il processo web server in ascolto
  console.log("server running at http://%s:%d", host, port);
});

apiServer.get("/", (request, response) => {
  console.log("sono in get /");
  response.send("<h1>ciao sono il client sei in home</h1> "); //risposta
});

apiServer.get("/nome", (request, response) => {
  console.log("richiesta nome ");
  response.send("<h1>Alessandro Arrigoni</h1>");
});

apiServer.get("/mioNome", (request, response) => {
  console.log(request.query.nome);
  response.send("<h1>il mio nome è:</h1>");
});

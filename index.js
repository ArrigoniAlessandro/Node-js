const { request, response, query } = require("express");
var express = require("express"); //dichiarare utilizzo del node modules
var apiServer = express();
var fs = require ("fs");
const { setFlagsFromString } = require("v8");

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

apiServer.get("somma", (request, response) => {
  console.log("somma request", request.query);
  response.send("risultato"+ request.query.a-(- request.query.b));
});

apiServer.get("/Student", (request, response) => {
console.log("/Student id", request.query.id);
//leggere il file
fs.readFile("Studenti.js", (err, data) =>{
  if(err){console.log("errore"+err);
}else{
  var students = JSON.parse(data);
  response.send(
  students.find(x => x.id === request.query.id));
}
});
});

apiServer.get("/newStudent",(request, response)=>{
console.log("/nuovo Studente", request.query.id, request.query.nome, request.id);
fs.writeFile("studenti.js",(err, data)=>{
if(err){
console.log("error:"+err);
}else{
  var studenti = JSON.parse(data);
  studenti[studenti.length+1]=request.query.data;
  console.log("surname:"+ request.query.surname,"name:"+ request.query.name, "id:"+request.query.id);
}
});
});


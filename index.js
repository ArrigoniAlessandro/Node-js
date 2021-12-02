var express = require ("express") //dichiarare utilizzo del node modules 
var apiServer = express();




/* console.log("funziona");
var a = 5; 
var b = "3";
console.log(a+b); */
var port = 3000;
var host = "localhost";
apiServer.listen(port,host,()=>{ //attiva il processo web server in ascolto
console.log("server running at http://%s:%d",host,port )
});
apiServer.get("/", ()=>{
console.log("sono in get");
})
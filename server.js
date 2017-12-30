var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var tabla = require('./empleados/tabla.json');

http.createServer(function (req, res) {
     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
     
     var obj = JSON.parse(fs.readFileSync('empleados/tabla.json','utf8'));
     var empleados = obj.empleados;

    var query = require('url').parse(req.url,true).query;
    if(req.method === "GET"){
        var accion = query.accion;
        if(accion === 'buscar'){
            var legajo = query.legajo;
            if(typeof legajo !== 'undefined'){
                var response = empleados.filter(function(obj){
                    return obj.legajo === legajo;
                });
                res.end(JSON.stringify(response));
            }
        } else if(accion === 'obtener'){
            var response = empleados;
            res.end(JSON.stringify(response));
        }
        /*var email = query.email;
       
        res.writeHead(200, {'Content-Type': 'text/plain'});
        console.log(query);
        if(email == 'juyagu@gmail.com'){
            res.end('existe');          
        } else {
            res.end('no existe');
        }*/
    }
    if(req.method === "OPTIONS"){
        req.on('data',function(data){
            var empleado = JSON.parse(data);
            var legajo = empleado.legajo;
            var lib = JSON.parse(fs.readFileSync('empleados/tabla.json','utf8'));
            for(var i =0;i< lib.empleados.length;i++){
                if(lib.empleados[i].legajo === legajo){
                    lib.empleados[i].nombre = empleado.nombre;
                    lib.empleados[i].puesto = empleado.puesto;
                    lib.empleados[i].ciudad = empleado.ciudad;
                    lib.empleados[i].sueldo = empleado.sueldo;
                }
            }
            fs.writeFile('empleados/tabla.json',JSON.stringify(lib),'utf8',function(err){
                if(err){
                    console.log(err);
                }
                console.log("Archivo guardado correctamente");
            });
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(lib));
        });
    }
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

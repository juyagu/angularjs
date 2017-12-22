angular.
    module('listadoEmpleados')
    .component('listadoEmpleados', {
        templateUrl: 'app/listado-empleados/listado-empleados.template.html',
        controller: ['$http', 
            function ListadoEmpleadosController($http) {
                var self = this;

                $http.get('empleados/tabla.json?v=1').then(function(response){
                    self.datos = response.data;
                    console.log(self.datos.empleados);
                });
            }
        ]
    });
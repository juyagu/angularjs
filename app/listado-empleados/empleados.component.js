angular.
    module('listadoEmpleados')
    .component('listadoEmpleados', {
        templateUrl: 'app/listado-empleados/listado-empleados.template.html',
        controller: ['$http','$location', 
            function ListadoEmpleadosController($http,$location) {
                var self = this;

                $http.get('empleados/tabla.json?v=1').then(function(response){
                    self.datos = response.data;
                });

                self.detalle = function(empleado){
                    console.log(empleado);
                    $location.path('empleados/' + empleado);
                }
            }
        ]
    });
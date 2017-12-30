angular.
    module('listadoEmpleados')
    .component('listadoEmpleados', {
        templateUrl: 'app/listado-empleados/listado-empleados.template.html',
        controller: ['$location','Empleados', 
            function ListadoEmpleadosController($location,Empleados) {
                var self = this;
                self.empleados = Empleados.query();
                /*this.empleados = EmpleadosId.query({legajo: '8422'},function(empleado){
                    console.log(empleado);
                });*/
                //this.empleados = EmpleadosId.query({legajo: '8422'});

                self.detalle = function(empleado){
                    console.log(empleado);
                    $location.path('empleados/' + empleado);
                }

                self.goFrm = function(){
                    $location.path('formulario/');
                }
            }
        ]
    });
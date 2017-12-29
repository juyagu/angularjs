angular.
    module('listadoEmpleados')
    .component('listadoEmpleados', {
        templateUrl: 'app/listado-empleados/listado-empleados.template.html',
        controller: ['Empleados', 
            function ListadoEmpleadosController(Empleados) {
                this.empleados = Empleados.query();
                /*this.empleados = EmpleadosId.query({legajo: '8422'},function(empleado){
                    console.log(empleado);
                });*/
                //this.empleados = EmpleadosId.query({legajo: '8422'});
            }
        ]
    });
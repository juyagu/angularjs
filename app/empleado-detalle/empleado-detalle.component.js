angular
    .module('empleadoDetalle')
    .component('empleadoDetalle',{
        templateUrl:'app/empleado-detalle/empleado-detalle.template.html',
        controller: ['$routeParams','EmpleadosId',
            function EmpleadoDetalleController($routeParams,EmpleadosId){
                this.legajo = $routeParams.empleado;
                var self = this;
                var response = EmpleadosId.query({legajo: this.legajo},function(empleado){
                    self.empleado = empleado[0];
                });
            }
        ]
    })
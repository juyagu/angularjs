angular
    .module('empleadoDetalle')
    .component('empleadoDetalle',{
        templateUrl:'app/empleado-detalle/empleado-detalle.template.html',
        controller: ['$routeParams','EmpleadosId','$location',
            function EmpleadoDetalleController($routeParams,EmpleadosId,$location){
                this.legajo = $routeParams.empleado;
                var self = this;
                var response = EmpleadosId.query({legajo: this.legajo},function(empleado){
                    self.empleado = empleado[0];
                });

                this.fnBack = function(){
                    $location.path('empleados');
                }

                this.fnMod = function(){
                                                            
                }
            }
        ]
    })
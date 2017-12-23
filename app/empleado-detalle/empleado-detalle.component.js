angular
    .module('empleadoDetalle')
    .component('empleadoDetalle',{
        template:'Este es el detalle del empleado legajo<span> {{$ctrl.empleado}}</span>',
        controller: ['$routeParams',
            function EmpleadoDetalleController($routeParams){
                this.empleado = $routeParams.empleado
            }
        ]
    })
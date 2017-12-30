angular
    .module('empeladosApp')
    .config(['$locationProvider','$routeProvider',
        function config($locationProvider,$routeProvider){
           $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/empleados',{
                    template: '<listado-empleados></listado-empleados>'
                })
                .when('/empleados/:empleado',{
                    template: '<empleado-detalle></empleado-detalle>'
                })
                .when('/formulario',{
                    template:'<app-formulario></app-formulario>'
                })
                .otherwise('/empleados');
        }
    ]);
angular 
    .module('core-empleados')
    .factory('Empleados',['$resource',
        function($resource){
            return $resource('http://localhost:3000?accion=obtener',{},{
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ])
    .factory('EmpleadosId',['$resource',
        function($resource){
            return $resource('http://localhost:3000?accion=buscar&legajo=:legajo',{},{
                query: {
                    method: 'GET',
                    params: {legajo : 'legajo'},
                    isArray: true
                }
            });
        }
    ]);
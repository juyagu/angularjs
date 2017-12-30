angular
    .module('appFormulario')
    .component('appFormulario', {
        templateUrl: 'app/formulario/formulario.template.html',
        controller: function FormularioController() {
            this.usuario = {};

            var user = {
                name: 'Christian von Eggers',
                email: 'juyagu@gmail.com',
                celular: 123456,
                subject: 'Formularios en AngularJs',
                message: 'Este es un comentario que no debe ocupar mas de 140 caracteres'
            };

            this.usuario = user;
        }
    })
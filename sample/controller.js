(function() {
    'use strict';

    angular.module('App').controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.change = {
            nome: 'Igor',
            tecnologia: 'AngularJS'
        };
        $scope.tpl = "Eu entendi que o %nome% queria algo desse tipo. Utilizando %tecnologia% como tecnologia." +
            "Essa %variavel% não está no objeto então não vai ser substituida utilizando %tecnologia%";

    }

})();
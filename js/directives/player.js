angular.module('scvDirectives').directive('player', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/views/player.html',
        controller: 'PlayerController',
        controllerAs: 'playerCtrl'
    };
});
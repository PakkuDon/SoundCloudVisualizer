angular.module('scvDirectives').directive('history', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/views/history.html',
        controller: 'HistoryController',
        controllerAs: 'histCtrl'
    };
});
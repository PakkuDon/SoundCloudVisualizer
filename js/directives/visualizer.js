angular.module('scvDirectives').directive('visualizer', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/views/visualizer.html',
        controller: 'VisualizerController',
        controllerAs: 'visualizerCtrl'
    };
});
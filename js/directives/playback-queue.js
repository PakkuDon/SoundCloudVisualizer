angular.module('scvDirectives').directive('playbackQueue', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/views/playback-queue.html',
        controller: 'PlaybackQueueController',
        controllerAs: 'playbackCtrl'
    };
});
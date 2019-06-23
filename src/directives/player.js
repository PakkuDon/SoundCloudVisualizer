angular.module('scvDirectives').directive('player', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/views/player.html',
        controller: 'PlayerController',
        controllerAs: 'playerCtrl',
        link: function(scope, element, attributes) {
            // Play next song from queue once current song ends
            var audio = element.find('audio');
            audio.on('ended', function(e) {
               scope.playerCtrl.playNext();
            });
        }
    };
});
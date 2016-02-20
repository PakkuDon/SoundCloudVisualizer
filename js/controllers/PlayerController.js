angular.module('scvControllers')
.controller('PlayerController', ['$scope', 'player', function($scope, player) {
    var self = this;
    this.track_url = "https://soundcloud.com/dub-motion/dub-motion-awakened";
    
    this.getCurrentTrack = function() {
        return player.getCurrentTrack();
    }
    
    // Play selected track
    this.play = function() {
        player.playTrack(this.track_url);
    }
    
    this.playNext = function() {
        $scope.$apply(function() {
            player.next();
        })
    }
}]);
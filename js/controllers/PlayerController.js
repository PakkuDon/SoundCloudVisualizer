angular.module('scvControllers').controller('PlayerController', ['player', function(player) {
    this.player = player;
    this.track_url = "https://soundcloud.com/dub-motion/dub-motion-awakened";
    
    this.play = function() {
        player.play(this.track_url);
    }
}]);
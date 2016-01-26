angular.module('scvControllers')
.controller('PlayerController', ['player', function(player) {
    var self = this;
    this.player = player;
    this.track_url = "https://soundcloud.com/dub-motion/dub-motion-awakened";
    
    // Play selected track
    this.play = function() {
        player.play(this.track_url);
    }
}]);
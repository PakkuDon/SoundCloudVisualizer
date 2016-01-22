angular.module('scvControllers').controller('PlaybackQueueController', 
['player', function(player) {
    this.player = player;
    
    this.play = function(index) {
        var track = this.player.getPlaybackQueue().splice(index, 1)[0];
        player.play(track.permalink_url);
    }
    
    this.delete = function(index) {
        this.player.getPlaybackQueue().splice(index, 1);
    }
}]);
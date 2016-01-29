angular.module('scvControllers').controller('PlaybackQueueController', 
['player', function(player) {
    this.player = player;
    
    this.play = function(index) {
        var track = this.player.getPlaybackQueue().getTracks()[0];
        this.player.getPlaybackQueue().remove(index);
        player.play(track.permalink_url);
    }
    
    this.delete = function(index) {
        this.player.getPlaybackQueue().remove(index);
    }
}]);
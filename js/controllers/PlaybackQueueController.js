angular.module('scvControllers').controller('PlaybackQueueController', 
['player', function(player) {
    // Return tracks in playback queue
    this.getPlaybackQueue = function() {
        return player.getPlaybackQueue().getTracks();
    }
    
    // Play and remove selected track from queue
    this.play = function(index) {
        var track = this.getPlaybackQueue()[index];
        player.getPlaybackQueue().remove(index);
        player.play(track.permalink_url);
    }
    
    // Remove selected track from queue
    this.delete = function(index) {
        player.getPlaybackQueue().remove(index);
    }
}]);
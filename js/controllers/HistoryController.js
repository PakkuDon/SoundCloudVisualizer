angular.module('scvControllers')
.controller('HistoryController', ['player', function(player) {
    this.player = player;
    
    // Play selected song
    this.play = function(index) {
        var trackUrl = player.getHistory().getTracks()[index].permalink_url;
        player.play(trackUrl);
    }
    
    // Remove selected song from history
    this.delete = function(index) {
        player.getHistory().remove(index);
    }
    
    // Add selected song to playback queue
    this.queue = function(index) {
        var track = player.getHistory().getTracks()[index];
        player.getPlaybackQueue().add(track);
    }
}]);
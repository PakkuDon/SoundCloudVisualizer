angular.module('scvControllers')
.controller('HistoryController', ['player', function(player) {
    this.player = player;
    
    // Play selected song
    this.play = function(index) {
        var trackUrl = player.getHistory()[index].permalink_url;
        player.play(trackUrl);
    }
    
    // Remove selected song from history
    this.delete = function(index) {
        player.getHistory().splice(index, 1);
    }
    
    // Add selected song to playback queue
    this.queue = function(index) {
        var track = player.getHistory()[index];
        player.getPlaybackQueue().push(track);
    }
}]);
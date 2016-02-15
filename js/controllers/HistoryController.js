angular.module('scvControllers')
.controller('HistoryController', ['player', function(player) {
    // Return tracks listed in history
    this.getHistory = function() {
        return player.getHistory().getTracks();
    }
    
    // Play selected song
    this.play = function(index) {
        var trackUrl = this.getHistory()[index].permalink_url;
        player.play(trackUrl);
    }
    
    // Remove selected song from history
    this.delete = function(index) {
        player.getHistory().remove(index);
    }
    
    // Add selected song to playback queue
    this.queue = function(index) {
        var track = this.getHistory()[index];
        player.getPlaybackQueue().add(track);
    }
}]);
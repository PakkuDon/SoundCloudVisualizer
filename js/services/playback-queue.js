angular.module('playerServices').factory('playbackQueue', function() {
    function PlaybackQueue() {
        var tracks = [];
        
        this.getTracks = function() {
            return tracks;
        }
        
        // Add track to queue
        this.add = function(track) {
            tracks.push(track);
        }
        
        // Remove track at given index
        this.remove = function(index) {
            tracks.splice(index, 1);
        }
    }
    
    return new PlaybackQueue();
});
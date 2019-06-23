angular.module('playerServices').factory('history', function() {
    function History() {
        var tracks = [];
        
        this.getTracks = function() {
            return tracks;
        }
        
        // Add track to history
        // If track already in history, move to end
        this.add = function(track) {
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].id === track.id) {
                    tracks.splice(i, 1);
                    break;
                }
            }
            
            tracks.push(track);
        }
        
        // Remove track at given index
        this.remove = function(index) {
            tracks.splice(index, 1);
        }
    }
    
    return new History();
});
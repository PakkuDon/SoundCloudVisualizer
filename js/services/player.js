angular.module('scvServices').factory('player', 
['$rootScope', 'soundcloudResolver', 'history', 'playbackQueue', 
function($rootScope, soundcloudResolver, history, playbackQueue) {
    function Player() {
        var self = this;
        var currentTrack = {};
        
        this.play = function(trackUrl) {
            // Retrieve track 
            soundcloudResolver.load(trackUrl, function(track) {
                // Play song and add to history
                $rootScope.$apply(function() {
                    currentTrack = track;
                    history.add(track);
                })
            });
        }
        
        this.getHistory = function() {
            return history;
        }
        
        this.getPlaybackQueue = function() {
            return playbackQueue;
        }
        
        this.getCurrentTrack = function() {
            return currentTrack;
        }
        
        // Retrieve and play next song in queue
        this.next = function() {
            if (playbackQueue.getTracks().length > 0) {
                var nextTrack = playbackQueue.getTracks()[0];
                $rootScope.$apply(function() {
                    playbackQueue.remove(0);
                    self.play(nextTrack.permalink_url);
                })
            }
        }
    }
    
    var player = new Player();
    return player;
}]);
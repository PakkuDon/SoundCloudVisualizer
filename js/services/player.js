angular.module('scvServices').factory('player', 
['$rootScope', 'soundcloudResolver', function($rootScope, soundcloudResolver) {
    function Player() {
        var self = this;
        var history = [];
        var playbackQueue = [];
        var currentTrack = {};
        
        this.play = function(trackUrl) {
            // Retrieve track 
            soundcloudResolver.load(trackUrl, function(track) {
                // If selected track already in history, remove it
                for (var i = 0; i < history.length; i++) {
                    if (history[i].id == track.id) {
                        history.splice(i, 1);
                        break;
                    }
                }
                
                // Play song and add to history
                $rootScope.$apply(function() {
                    currentTrack = track;
                    history.push(track);
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
    }
    
    var player = new Player();
    return player;
}]);
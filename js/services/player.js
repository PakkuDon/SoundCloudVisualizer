angular.module('scvServices').factory('player', 
['$rootScope', 'notifications', 'soundcloudResolver', 'history', 'playbackQueue', 
function($rootScope, notifications, soundcloudResolver, history, playbackQueue) {
    function Player() {
        var self = this;
        var currentTrack = {};
        
        this.play = function(trackUrl) {
            // Retrieve track 
            soundcloudResolver.load(trackUrl, function(sound) {
                // Display error if track not resolved or if 
                // result is not valid track or playlist
                if (sound.errors) {
                    notifications.addMessage('Error: Failed to load data for ' 
                        + trackUrl + '.');
                }
                else if (sound.uri.indexOf('/tracks/') === -1) {
                    notifications.addMessage('Error: ' + trackUrl 
                        + ' is not a valid track.');
                }
                else {
                    // Play song and add to history
                    $rootScope.$apply(function() {
                        currentTrack = sound;
                        history.add(sound);
                    })
                }
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
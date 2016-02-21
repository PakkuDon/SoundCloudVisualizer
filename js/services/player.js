angular.module('scvServices').factory('player', 
['notifications', 'soundcloudResolver', 'history', 'playbackQueue', 
function(notifications, soundcloudResolver, history, playbackQueue) {
    function Player() {
        var self = this;
        var currentTrack = {};
      
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
                playbackQueue.remove(0);
                self.play(nextTrack);
            }
        }
        
         // Play song and add to history
        this.play = function(sound) {
            currentTrack = sound;
            history.add(sound);
        }
        
        // Retrieve data from given URL, then play track 
        this.playTrack = function(trackUrl) {
            soundcloudResolver.load(trackUrl, function(sound) {
                // Display error if track not resolved or if 
                // result is not valid track or playlist
                if (sound.errors) {
                    notifications.addMessage('Error: Failed to load data for ' 
                        + trackUrl + '.');
                }
                else if (sound.uri.indexOf('/tracks') === -1 
                    && sound.uri.indexOf('/playlists') === -1) {
                    notifications.addMessage('Error: ' + trackUrl 
                        + ' is not a valid track.');
                }
                else {
                    // If result is a track, play song
                    if (sound.uri.indexOf('/tracks') >= 0) {
                        sound.stream_url += '?client_id=' + soundcloudResolver.clientID;
                        self.play(sound);
                    }
                    // Else, queue songs and play first track
                    else {
                        for (var i = 0; i < sound.tracks.length; i++) {
                            sound.tracks[i].stream_url += '?client_id=' + soundcloudResolver.clientID;
                            playbackQueue.add(sound.tracks[i]);
                        }
                        self.next();
                    }
                }
            });
        }
    }
    
    var player = new Player();
    return player;
}]);
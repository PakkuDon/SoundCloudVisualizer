// Container for SoundCloud Client ID
// Didn't know what else to call it :\
var API = {
    clientID: '4db236383438b2ebbe8e4f151e1c1b59'
};

function SoundCloudResolver() {
    SC.initialize({
            client_id: API.clientID
    });

    // Retrieve song data via SoundCloud API
    this.load = function(trackUrl, callback) {
        SC.get('/resolve', { url: trackUrl }, function(sound) {
            callback(sound);
        });
    }
}

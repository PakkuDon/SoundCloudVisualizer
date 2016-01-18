angular.module('scvServices').factory('soundcloudResolver', ['$http', function($http) {
    var clientID = '4db236383438b2ebbe8e4f151e1c1b59';
    SC.initialize({
        client_id: API.clientID
    });
    
    // Retrieve track data via SoundCloud API
    return {
        load: function(trackUrl, callback) {
            SC.get('/resolve', { url: trackUrl }, function(sound) {
                callback(sound);
            });
        }
    };
}]);
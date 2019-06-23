angular.module('scvServices').factory('soundcloudResolver', 
    ['$http', 'soundcloudId', function($http, soundcloudId) {
    const API_URL = 'https://api.soundcloud.com';
    
    // Retrieve track data via SoundCloud API
    return {
        load: function(url, successCallback, errorCallback) {
            $http.get(API_URL + '/resolve', { 
            params: { 
                url : url, 
                client_id : soundcloudId 
            } 
            }).success(function(sound) {
                successCallback(sound);
            }).error(function(error) {
                errorCallback('Could not load data for ' + url);
            });
        }
    };
}]);
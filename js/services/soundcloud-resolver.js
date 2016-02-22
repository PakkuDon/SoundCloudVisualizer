angular.module('scvServices').factory('soundcloudResolver', ['$http', function($http) {
    const API_URL = 'https://api.soundcloud.com';
    
    // Retrieve track data via SoundCloud API
    return {
        clientID: '4db236383438b2ebbe8e4f151e1c1b59',
        load: function(url, successCallback, errorCallback) {
            $http.get(API_URL + '/resolve', { 
            params: { 
                url : url, 
                client_id : this.clientID 
            } 
            }).success(function(sound) {
                successCallback(sound);
            }).error(function(error) {
                errorCallback('Could not load data for ' + url);
            });
        }
    };
}]);
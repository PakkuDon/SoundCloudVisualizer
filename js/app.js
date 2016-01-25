var controllers = angular.module('scvControllers', []);
var services = angular.module('scvServices', []);
var directives = angular.module('scvFilters', ['ngSanitize']);
var app = angular.module('SoundCloudVisualizer', 
    ['scvServices', 'scvControllers', 'scvFilters']);

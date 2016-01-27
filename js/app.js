var controllers = angular.module('scvControllers', []);
var services = angular.module('scvServices', []);
var filters = angular.module('scvFilters', ['ngSanitize']);
var directives = angular.module('scvDirectives', []);
var app = angular.module('SoundCloudVisualizer', 
    ['scvServices', 'scvControllers', 'scvFilters', 'scvDirectives']);

import './style.css'

var controllers = angular.module('scvControllers', []);
var services = angular.module('scvServices', ['playerServices']);
var playerServices = angular.module('playerServices', []);
var filters = angular.module('scvFilters', ['ngSanitize']);
var directives = angular.module('scvDirectives', []);
var app = angular.module('SoundCloudVisualizer',
    ['scvServices', 'scvControllers', 'scvFilters', 'scvDirectives']);

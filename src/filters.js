var filterModule = angular.module('scvFilters');

// Credit: David Boyd's answer in 'External resource not being loaded by AngularJs'
// http://stackoverflow.com/a/24519069
filterModule.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

filterModule.filter('reverse', function() {
    return function(array) {
        return array.slice().reverse();
    };
});
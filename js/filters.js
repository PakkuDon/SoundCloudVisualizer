// Credit: David Boyd's answer in 'External resource not being loaded by AngularJs'
// http://stackoverflow.com/a/24519069
angular.module('scvFilters').filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
angular.module('scvDirectives').directive('rendered', 
['$rootScope', '$timeout', function($rootScope, $timeout) {
   return {
       restrict: 'A',
       link: function(scope, elem, attr) {
           // Notify listeners that Angular directives have been rendered
           $timeout(function() {
               $rootScope.$broadcast('rendered');
           });
       }    
   };
}]);
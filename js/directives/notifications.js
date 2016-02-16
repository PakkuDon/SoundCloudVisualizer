angular.module('scvDirectives').directive('notifications', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/views/notifications.html',
        controller: 'NotificationsController',
        controllerAs: 'notificationsCtrl'
    };
});
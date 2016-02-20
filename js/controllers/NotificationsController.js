angular.module('scvControllers')
.controller('NotificationsController', ['notifications', function(notifications) {
    this.getNotifications = function() {
        return notifications.getMessages();
    }
    
    this.delete = function(index) {
        notifications.deleteMessage(index);
    }
}]);
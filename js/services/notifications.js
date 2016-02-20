angular.module('scvServices').factory('notifications', function() {
    function Notifications() {
        var messages = [];
        
        this.getMessages = function() {
            return messages;
        }
        
        this.addMessage = function(message) {
            messages.unshift(message);
        }
        
        this.deleteMessage = function(index) {
            messages.splice(index, 1);
        }
    }
    return new Notifications();
});
angular.module('scvControllers').controller('VisualizerController', 
['$scope', 'audio', function($scope, audio) {
    var self = this;
    this.analyser;
    this.visualizer;
    this.strategy = '';
    
    this.setStrategy = function(strategy) {
        self.visualizer.setStrategy(strategy);
    }
    
    // Initialise analyser and visualizer after AngularJS elements rendered
    $scope.$on('rendered', function(event, messages) {
        var graphicsContext = document.querySelector('canvas').getContext('2d');
        self.analyser = audio.getAnalyser();
        self.visualizer = new Visualizer(graphicsContext, self.analyser);
        
        var draw = function() {
            self.visualizer.draw();
            requestAnimationFrame(draw);
        }
        
        // Start visualization loop
        requestAnimationFrame(draw);
    });
}]);
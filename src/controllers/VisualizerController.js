angular.module('scvControllers').controller('VisualizerController', 
['$scope', 'audio', function($scope, audio) {
    var self = this;
    var analyser;
    var visualizer;
    this.strategy = '';
    
    this.setStrategy = function(strategy) {
        visualizer.setStrategy(strategy);
    }
    
    this.getStrategies = function() {
        if (typeof visualizer !== 'undefined') {
            return visualizer.strategies;
        }
        else {
            return {};
        }
    }
    
    // Initialise analyser and visualizer after AngularJS elements rendered
    $scope.$on('rendered', function(event, messages) {
        var graphicsContext = document.querySelector('canvas').getContext('2d');
        analyser = audio.getAnalyser();
        visualizer = new Visualizer(graphicsContext, analyser);
        // Set initial visualizer 
        var key = Object.keys(visualizer.strategies)[0];
        self.strategy = visualizer.strategies[key];
        
        var draw = function() {
            visualizer.draw();
            requestAnimationFrame(draw);
        }
        
        // Start visualization loop
        requestAnimationFrame(draw);
    });
}]);
function Visualizer(graphics, analyser) {
    var self = this;
    this.graphics = graphics;
    this.analyser = analyser;
    this.strategies = {
        minimalistic : new MinimalisticVisualizer(),
        waveform : new WaveformVisualizer()
    };

    this.setStrategy = function(key) {
        self.strategy = self.strategies[key];
        self.strategy.initialise(this.graphics, this.analyser);
    }

    this.draw = function() {
        self.strategy.draw(this.graphics, this.analyser);
    }

    // Default to first listed strategy
    this.setStrategy(Object.keys(self.strategies)[0]);
};
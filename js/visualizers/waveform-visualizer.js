function WaveformVisualizer() {
    var self = this;

    var bufferLength = null;
    var streamData = null;
    var width = null;
    var height = null;
    var gridWidth = null;
    var gridHeight = null;

    // Calculate and initialise values used when drawing audio data
    this.initialise = function(graphics, analyser) {
        analyser.fftSize = 2048;
        bufferLength = analyser.frequencyBinCount;
        streamData = new Uint8Array(bufferLength);

        width = graphics.canvas.width;
        height = graphics.canvas.height;
        gridWidth = width / bufferLength;
        gridHeight = height / 256;

        graphics.strokeStyle = "#69C";
    }

    // Draw audio data
    this.draw = function(graphics, analyser) {
        analyser.getByteTimeDomainData(streamData);
        graphics.clearRect(0, 0, width, height);
        graphics.beginPath();

        for (var i = 0; i < bufferLength; i++) {
            var x = i * gridWidth;
            // Calculate y coordinate with respect to y and
            // shift it closer to the center of the page
            var y = gridHeight * streamData[i];

            if (i == 0) {
                graphics.moveTo(x, y);
            }
            else {
                graphics.lineTo(x, y);
            }
        }

        graphics.stroke();
        graphics.closePath();
    }
}

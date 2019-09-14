function MinimalisticVisualizer() {
  var self = this

  var bufferLength = null
  var streamData = null
  var width = null
  var height = null
  var gridWidth = null
  var gridHeight = null

  // Calculate and initialise values used when drawing audio data
  this.initialise = function(graphics, analyser) {
    analyser.fftSize = 256
    bufferLength = analyser.frequencyBinCount
    streamData = new Uint8Array(bufferLength)

    width = graphics.canvas.width
    height = graphics.canvas.height
    gridWidth = width / bufferLength
    gridHeight = height / 256

    graphics.strokeStyle = "#69C"
  }

  // Draw audio data
  this.draw = function(graphics, analyser) {
    analyser.getByteFrequencyData(streamData)
    graphics.clearRect(0, 0, width, height)

    for (var i = 0; i < bufferLength; i++) {
      var value = streamData[i]
      var barHeight = height - gridHeight * value

      graphics.beginPath()
      graphics.moveTo(i * gridWidth, barHeight)
      graphics.lineTo((i + 1) * gridWidth, barHeight)
      graphics.stroke()
      graphics.closePath()
    }
  }
}

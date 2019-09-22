export default {
  draw: ({ waveformData, graphicsContext }) => {
    const bufferLength = waveformData.length

    const width = graphicsContext.canvas.width
    const height = graphicsContext.canvas.height
    const gridWidth = width / bufferLength
    const gridHeight = height / 256

    graphicsContext.strokeStyle = "#69C"
    graphicsContext.fillStyle = "none"
    graphicsContext.clearRect(0, 0, width, height)
    graphicsContext.beginPath()

    graphicsContext.moveTo(0, gridHeight * waveformData[0])

    for (let i = 1; i < bufferLength; i++) {
      let x = i * gridWidth
      let y = gridHeight * waveformData[i]

      graphicsContext.lineTo(x, y)
    }

    graphicsContext.stroke()
    graphicsContext.closePath()
  },
}

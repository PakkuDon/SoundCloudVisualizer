export default {
  draw: ({ frequencyData, graphicsContext }) => {
    const bufferLength = frequencyData.length

    const width = graphicsContext.canvas.width
    const height = graphicsContext.canvas.height
    const gridWidth = width / bufferLength
    const gridHeight = height / 256

    graphicsContext.strokeStyle = "#369"
    graphicsContext.fillStyle = "#69C"
    graphicsContext.clearRect(0, 0, width, height)

    for (let i = 0; i < bufferLength; i++) {
      const frequency = frequencyData[i]
      const barHeight = gridHeight * frequency

      graphicsContext.fillRect(
        i * gridWidth,
        height - barHeight,
        gridWidth - 1,
        height,
      )
    }
  },
}

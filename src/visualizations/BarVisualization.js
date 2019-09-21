export default {
  draw: ({ audioData, graphicsContext }) => {
    const bufferLength = audioData.length

    const width = graphicsContext.canvas.width
    const height = graphicsContext.canvas.height
    const gridWidth = width / bufferLength
    const gridHeight = height / 256
    graphicsContext.clearRect(0, 0, width, height)

    for (let i = 0; i < bufferLength; i++) {
      const frequency = audioData[i]
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

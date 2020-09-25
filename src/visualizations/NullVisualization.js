export default {
  draw({ graphicsContext }) {
    graphicsContext.clearRect(
      0,
      0,
      graphicsContext.canvas.width,
      graphicsContext.canvas.height,
    )
  },
}

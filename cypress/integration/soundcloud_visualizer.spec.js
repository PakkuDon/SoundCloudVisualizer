context("SoundCloudVisualizer", () => {
  it("renders successfully", () => {
    cy.visit("/")
    cy.title().should("contain", "SoundCloud Visualizer")
  })
})

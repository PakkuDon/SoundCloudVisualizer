describe("SoundCloudVisualizer", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders successfully", () => {
    cy.title().should("contain", "SoundCloud Visualizer")
  })

  describe("when user enters a SoundCloud track", () => {
    beforeEach(() => {
      cy.get("#track-input").type(
        "https://soundcloud.com/dub-motion/dub-motion-awakened",
      )
      cy.contains("Load song").click()
      // TODO: Replace hard-coded wait with wait on SoundCloud resolution
      cy.wait(2000)
    })

    it("plays selected song", () => {
      // TODO: Stub response from SoundCloud API
      cy.get("audio")
        .should("have.attr", "src")
        .should("contain", "https://api.soundcloud.com/tracks/42873590/stream")
    })

    it("adds song to history", () => {
      // TODO: Stub response from SoundCloud API
      cy.get("[data-testid='sidebar']")
        .should("contain", "Dub Motion")
        .should("contain", "Awakened")
    })
  })
})

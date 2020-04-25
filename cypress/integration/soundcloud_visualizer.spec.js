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

    describe("and there is no song currently playing", () => {
      it("plays selected song", () => {
        // TODO: Stub response from SoundCloud API
        cy.get("audio")
          .should("have.attr", "src")
          .should(
            "contain",
            "https://api.soundcloud.com/tracks/42873590/stream",
          )
      })

      it("adds song to history", () => {
        // TODO: Stub response from SoundCloud API
        cy.get("[data-testid='sidebar']")
          .should("contain", "Dub Motion")
          .should("contain", "Awakened")
      })
    })

    describe("and there is a song currently playing", () => {
      beforeEach(() => {
        cy.get("#track-input")
          .clear()
          .type("https://soundcloud.com/monstercat/nitro-fun-new-game")
        cy.contains("Load song").click()
        // TODO: Replace hard-coded wait with wait on SoundCloud resolution
        cy.wait(2000)
      })

      it("does not play input song", () => {
        cy.get("audio")
          .should("have.attr", "src")
          .should(
            "not.contain",
            "https://api.soundcloud.com/tracks/133621063/stream",
          )
      })

      it("adds song to playback queue", () => {
        cy.get("[data-testid='sidebar']").contains("Playback queue").click()
        cy.get("[data-testid='sidebar']")
          .should("contain", "Nitro Fun - New Game")
          .should("contain", "Monstercat")
      })
    })
  })
})

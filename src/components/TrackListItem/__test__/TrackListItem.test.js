import React from "react"
import { render, fireEvent } from "@testing-library/react"

import TrackListItem from "../TrackListItem"
import TrackFactory from "../../../testHelpers/trackFactory"

describe("TrackListItem", () => {
  it("renders track information", () => {
    const { container } = render(
      <TrackListItem track={TrackFactory.create()} />,
    )

    expect(container).toMatchSnapshot()
  })

  describe("when onSelect callback is provided", () => {
    it("calls onSelect when play button is clicked", () => {
      const spy = jest.fn()
      const { getByTitle } = render(
        <TrackListItem track={TrackFactory.create()} onSelect={spy} />,
      )

      fireEvent.click(getByTitle("Play track"))

      expect(spy).toBeCalled()
    })
  })

  describe("when onDelete callback is provided", () => {
    it("calls onDelete when delete button is clicked", () => {
      const spy = jest.fn()
      const { getByTitle } = render(
        <TrackListItem track={TrackFactory.create()} onDelete={spy} />,
      )

      fireEvent.click(getByTitle("Delete track"))

      expect(spy).toBeCalled()
    })
  })

  describe("when onQueue callback is provided", () => {
    it("calls onQueue when queue button is clicked", () => {
      const spy = jest.fn()
      const { getByTitle } = render(
        <TrackListItem track={TrackFactory.create()} onQueue={spy} />,
      )

      fireEvent.click(getByTitle("Add to playback queue"))

      expect(spy).toBeCalled()
    })
  })
})

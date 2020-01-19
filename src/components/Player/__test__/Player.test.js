import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Player from "../Player"
import TrackFactory from "../../../testHelpers/trackFactory"

describe("Player", () => {
  beforeEach(() => {
    window.AudioContext = jest.fn().mockImplementation(() => {
      return {
        createMediaElementSource: () => ({ connect() {} }),
        createAnalyser: () => ({ connect() {} }),
      }
    })
  })

  afterEach(() => {
    window.AudioContext.mockRestore()
  })

  it("renders track details", () => {
    const track = TrackFactory.create()
    const { container } = render(<Player track={track} />)

    expect(container).toMatchSnapshot()
  })

  describe("on url edit", () => {
    it("calls supplied onUrlEdit handler", () => {
      const spy = jest.fn()
      const track = TrackFactory.create()
      const { getByLabelText } = render(
        <Player track={track} onUrlEdit={spy} />,
      )

      fireEvent.change(getByLabelText("SoundCloud track URL"), {
        target: { value: "https://soundcloud.com" },
      })

      expect(spy).toBeCalled()
    })
  })

  describe("on form submission", () => {
    it("calls supplied onSongSelect handler", () => {
      const spy = jest.fn()
      const track = TrackFactory.create()
      const { getByText } = render(<Player track={track} onSongSelect={spy} />)

      fireEvent.click(getByText("Load song"))

      expect(spy).toBeCalled()
    })
  })

  describe("on audio ended", () => {
    it("calls supplied onAudioEnded handler", () => {
      const spy = jest.fn()
      const track = TrackFactory.create()
      const { container } = render(<Player track={track} onAudioEnded={spy} />)

      fireEvent.ended(container.querySelector("audio"))

      expect(spy).toBeCalled()
    })
  })

  describe("on render", () => {
    it("calls supplied onAudioRender handler", () => {
      const spy = jest.fn()
      const track = TrackFactory.create()
      render(<Player track={track} onAudioRender={spy} />)

      expect(spy).toBeCalled()
    })
  })
})

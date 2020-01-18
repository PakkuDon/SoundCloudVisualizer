import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Audio from "../Audio"

describe("Audio", () => {
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

  it("uses provided src", () => {
    const src = "https://example.com/example.mp3"
    const { container } = render(<Audio src={src} />)

    expect(container).toMatchSnapshot()
  })

  describe("on audio end", () => {
    it("calls supplied onEnded handler", () => {
      const spy = jest.fn()
      const { container } = render(<Audio onEnded={spy} />)

      fireEvent.ended(container.querySelector("audio"))

      expect(spy).toBeCalled()
    })
  })
})

import React from "react"
import { shallow } from "enzyme"

import Audio from "../Audio"

describe("Audio", () => {
  it("uses provided src", () => {
    const src = "https://example.com/example.mp3"
    const wrapper = shallow(<Audio src={src} />)

    const audioSrc = wrapper.find("audio").prop("src")

    expect(audioSrc).toBe(src)
  })

  describe("on audio end", () => {
    it("calls supplied onEnded handler", () => {
      const spy = jest.fn()
      const wrapper = shallow(<Audio onEnded={spy} />)

      wrapper.simulate("ended")

      expect(spy).toBeCalled()
    })
  })
})

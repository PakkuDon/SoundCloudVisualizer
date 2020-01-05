import React from "react"
import { shallow } from "enzyme"

import Player from "../Player"
import Audio from "../../Audio"

const createTrack = () => ({
  id: 1,
  title: "Hello World",
  genre: "",
  permalink_url: "",
  stream_url: "",
  artwork_url: "",
  user: {
    username: "Bob",
  },
})

describe("Player", () => {
  it("renders track details", () => {
    const track = createTrack()
    const wrapper = shallow(<Player track={track} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe("on url edit", () => {
    it("calls supplied onUrlEdit handler", () => {
      const spy = jest.fn()
      const track = createTrack()
      const wrapper = shallow(<Player track={track} onUrlEdit={spy} />)

      wrapper.find("input").simulate("change", { target: {} })
      expect(spy).toBeCalled()
    })
  })

  describe("on form submission", () => {
    it("calls supplied onSongSelect handler", () => {
      const spy = jest.fn()
      const track = createTrack()
      const wrapper = shallow(<Player track={track} onSongSelect={spy} />)

      wrapper.find("form").simulate("submit", { preventDefault: () => {} })
      expect(spy).toBeCalled()
    })
  })

  describe("on audio ended", () => {
    it("calls supplied onAudioEnded handler", () => {
      const spy = jest.fn()
      const track = createTrack()
      const wrapper = shallow(<Player track={track} onAudioEnded={spy} />)

      wrapper.find(Audio).prop("onEnded")()
      expect(spy).toBeCalled()
    })
  })

  describe("on audio render", () => {
    it("calls supplied onAudioRender handler", () => {
      const spy = jest.fn()
      const track = createTrack()
      const wrapper = shallow(<Player track={track} onAudioRender={spy} />)

      wrapper.find(Audio).prop("onRender")()
      expect(spy).toBeCalled()
    })
  })
})

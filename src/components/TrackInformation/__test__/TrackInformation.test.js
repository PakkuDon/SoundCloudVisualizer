import React from 'react'
import { render } from "@testing-library/react"

import TrackInformation from '../TrackInformation'

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

describe("TrackInformation", () => {
  it("renders track information", () => {
    const children = <div>Hello world</div>
    const { container } = render(<TrackInformation track={createTrack()} />)

    expect(container).toMatchSnapshot()
  })
})

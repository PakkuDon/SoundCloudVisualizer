import React from "react"
import { render } from "@testing-library/react"

import TrackList from "../TrackList"
import TrackFactory from "../../../testHelpers/trackFactory"

describe("TrackList", () => {
  it("renders list of tracks", () => {
    const tracks = [
      TrackFactory.create({ id: 1 }),
      TrackFactory.create({ id: 2 }),
    ]
    const { container } = render(<TrackList tracks={tracks} />)

    expect(container).toMatchSnapshot()
  })
})

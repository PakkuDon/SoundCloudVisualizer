import React from "react"
import { render } from "@testing-library/react"

import TrackInformation from "../TrackInformation"
import TrackFactory from "../../../testHelpers/trackFactory"

describe("TrackInformation", () => {
  it("renders track information", () => {
    const { container } = render(
      <TrackInformation track={TrackFactory.create()} />,
    )

    expect(container).toMatchSnapshot()
  })
})

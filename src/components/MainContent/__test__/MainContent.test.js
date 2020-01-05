import React from "react"
import { render } from "@testing-library/react"

import MainContent from "../MainContent"

describe("MainContent", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    const { container } = render(<MainContent>{children}</MainContent>)

    expect(container).toMatchSnapshot()
  })
})

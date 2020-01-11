import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Sidebar from "../Sidebar"

describe("Sidebar", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    const { container } = render(<Sidebar>{children}</Sidebar>)

    expect(container).toMatchSnapshot()
  })

  describe("when collapsed", () => {
    it("hides children", () => {
      const children = <div>Hello world</div>
      const { container, debug, queryByText, getByTitle } = render(
        <Sidebar>{children}</Sidebar>,
      )

      fireEvent.click(getByTitle("Toggle sidebar"))

      expect(queryByText("Hello world")).toBeNull()
    })
  })
})

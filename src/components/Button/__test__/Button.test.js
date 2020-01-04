import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Button from "../Button"

describe("Button", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    const { container } = render(<Button>{children}</Button>)

    expect(container).toMatchSnapshot()
  })

  describe("on click", () => {
    it("calls supplied onClick handler", () => {
      const spy = jest.fn()
      const { getByText } = render(<Button onClick={spy}>Click</Button>)

      fireEvent.click(getByText("Click"))

      expect(spy).toBeCalled()
    })
  })
})

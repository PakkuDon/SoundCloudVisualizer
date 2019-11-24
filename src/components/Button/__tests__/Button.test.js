import React from "react"
import { shallow } from "enzyme"

import Button from "../Button"

describe("Button", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    const wrapper = shallow(<Button>{children}</Button>)

    expect(wrapper.contains(children)).toBe(true)
  })

  describe("on click", () => {
    it("calls supplied onClick handler", () => {
      const spy = jest.fn()
      const wrapper = shallow(<Button onClick={spy} />)

      wrapper.simulate("click")

      expect(spy).toBeCalled()
    })
  })
})

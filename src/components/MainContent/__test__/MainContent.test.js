import React from "react"
import { shallow } from "enzyme"

import MainContent from "../MainContent"

describe("MainContent", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    const wrapper = shallow(<MainContent>{children}</MainContent>)

    expect(wrapper.contains(children)).toBe(true)
  })
})

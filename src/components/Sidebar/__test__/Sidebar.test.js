import React from "react"
import { shallow } from "enzyme"

import Sidebar from "../Sidebar"

describe("Sidebar", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    const wrapper = shallow(<Sidebar>{children}</Sidebar>)

    expect(wrapper.contains(children)).toBe(true)
  })

  describe("when collapsed", () => {
    it("hides children", () => {
      const children = <div>Hello world</div>
      const wrapper = shallow(<Sidebar>{children}</Sidebar>)

      wrapper.find('button').simulate('click')

      expect(wrapper.contains(children)).toBe(false)
    })
  })
})

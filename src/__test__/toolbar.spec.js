import React from "react"
import renderer from "react-test-renderer"
import { shallow } from "enzyme";
import { Toolbar } from "../toolbar/toolbar";

describe("Toolbar snapshot", () => {
  it("Take toolbar snapshot", () => {
    const renderedToolbar = renderer.create(<Toolbar count={10} sortBy={"release"} onSortClick={() => null} />).toJSON();
    expect(renderedToolbar).toMatchSnapshot();
  })
});

const mockFn = jest.fn();

describe("Shalow render of toolbar component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Toolbar count={10} sortBy={"release"} onSortClick={mockFn} />)
  });

  it("Component successfully rendered", () => {
    expect(component.length).toEqual(1);
  });

  it("contains div with movies count", () => {
    expect(component.find('div').get(1).props.children.join("")).toBe("10 movies found");
  });

  it("triggers handleClick function", () => {
    component.find('.selected').simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
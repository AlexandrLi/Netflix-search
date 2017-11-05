import React from "react"
import renderer from "react-test-renderer"
import { shallow } from "enzyme";
import { App } from "../app/App";

describe("App snapshot", () => {
  it("Take App snapshot", () => {
    const renderedSearchPage = renderer.create(<App />).toJSON();
    expect(renderedSearchPage).toMatchSnapshot();
  })
});

describe("Shalow render of App component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />)
  });

  it("Component successfully rendered", () => {
    expect(component.length).toEqual(1);
  });
});
import React from "react"
import renderer from "react-test-renderer"
import { MemoryRouter } from 'react-router-dom'
import { shallow } from "enzyme";
import { SearchPage } from "../search-page/SearchPage";
import { movies } from './mock-data';

const props = {
  movies: movies,
  match: {
    params: {
      query: 'lord of the rings'
    }
  },
  fetchMovies: jest.fn()
}

describe("Search-page snapshot", () => {
  it("Take search-page snapshot", () => {
    const renderedSearchPage = renderer.create(<MemoryRouter><SearchPage {...props} /></MemoryRouter>).toJSON();
    expect(renderedSearchPage).toMatchSnapshot();
  })
});

describe("Shalow render of Search-page component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<MemoryRouter><SearchPage {...props} /></MemoryRouter>)
  });

  it("Component successfully rendered", () => {
    expect(component.length).toEqual(1);
  });
});
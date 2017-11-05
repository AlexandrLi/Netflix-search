import React from "react"
import renderer from "react-test-renderer"
import { MemoryRouter } from 'react-router-dom'
import { shallow } from "enzyme";
import { FilmInfo } from "../film-info/FilmInfo";
import { movies, movie } from './mock-data';

const props = {
  movies: movies,
  selectedMovie: movie,
  match: {
    params: {
      id: movie.id
    }
  },
  fetchMovie: jest.fn()
}

describe("Film info snapshot", () => {
  it("Take film-info snapshot", () => {
    const renderedSearchPage = renderer.create(<MemoryRouter><FilmInfo {...props} /></MemoryRouter>).toJSON();
    expect(renderedSearchPage).toMatchSnapshot();
  })
});

describe("Shalow render of Film info component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<MemoryRouter><FilmInfo {...props} /></MemoryRouter>)
  });

  it("Component successfully rendered", () => {
    expect(component.length).toEqual(1);
  });
});
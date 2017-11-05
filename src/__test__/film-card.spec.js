import React from "react"
import renderer from "react-test-renderer"
import { shallow } from "enzyme";
import { FilmCard } from "../film-card/FilmCard";
import { movie } from './mock-data';

describe("Film-card snapshot", () => {
  it("Take film-card snapshot", () => {
    const renderedFilmCard = renderer.create(<FilmCard movie={movie} />).toJSON();
    expect(renderedFilmCard).toMatchSnapshot();
  })
});

describe("Shalow render of Film-card component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<FilmCard movie={movie} />)
  });

  it("Component successfully rendered", () => {
    expect(component.length).toEqual(1);
  });

  it("Poster url", () => {
    expect(component.find("img").prop("src"))
      .toEqual(`https://image.tmdb.org/t/p/w342${movie.poster_path}`);
  });

  it("contains correct movie title", () => {
    expect(component.find('h2').get(0).props.children).toBe(movie.title);
  });

  it("contains movie release date", () => {
    expect(component.find('.year').get(0).props.children).toBe("2001");
  });

  it("contains movie votes", () => {
    expect(component.find('p').get(0).props.children).toBe(movie.vote_average);
  });
});
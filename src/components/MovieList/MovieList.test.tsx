import { render, screen } from '@testing-library/react';
import { MovieList } from './MovieList';
import { mockMovies } from '@/__Mocks__';

describe('<MovieList />', () => {
  beforeEach(() => {
    render(<MovieList movies={mockMovies} />);
  });
  test('should render the correct numbers of movies', () => {
    const movieList = screen.getAllByRole('article');
    expect(movieList).toHaveLength(mockMovies.length);
  });

  test('should render the correct movie title', () => {
    const movieTitle = screen.getByText(/Winnie the Pooh: Blood and Honey/i);
    expect(movieTitle).toBeInTheDocument();
  });

  test('should render the correct movie poster', () => {
    const moviePoster = screen.getByAltText(mockMovies[0].title);
    expect(moviePoster).toBeInTheDocument();
  });

  test('should render the correct movie release date', () => {
    const movieReleaseDate = screen.getByText(/2023-01-27/i);
    expect(movieReleaseDate).toBeInTheDocument();
  });

  test('should render the correct movie rating', () => {
    const movieRating = screen.getByText(/5.9/i);
    expect(movieRating).toBeInTheDocument();
  });

  test('should render links to every movie details page', () => {
    const movieLink = screen.getAllByRole('link', { name: /read more.../i });
    expect(movieLink.length).toEqual(mockMovies.length);
  });

  test('should render not found message when the movies is empty', () => {
    render(<MovieList movies={[]} />);
    const notFoundMessage = screen.getByText(/no movies found/i);
    expect(notFoundMessage).toBeInTheDocument();
  });
});

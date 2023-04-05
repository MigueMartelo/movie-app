import { screen, render } from '@testing-library/react';
import { MovieView } from './MovieView';
import { mockMovieCredits, mockMovieDetail } from '@/__Mocks__';

jest.mock('@tanstack/react-query', () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: [] }),
  useMutation: () => ({ mutate: jest.fn() }),
}));

describe('<MovieView />', () => {
  beforeEach(() => {
    render(
      <MovieView movie={mockMovieDetail} movieCredits={mockMovieCredits} />
    );
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render the movie title', () => {
    expect(
      screen.getByRole('heading', { name: mockMovieDetail.title })
    ).toBeInTheDocument();
  });

  test('should render the movie overview', () => {
    expect(screen.getByText(mockMovieDetail.overview)).toBeInTheDocument();
  });

  test('should render the movie release date', () => {
    expect(screen.getByText(/2022-11-04/i)).toBeInTheDocument();
  });

  test('should render the movie genres', () => {
    expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    expect(screen.getByText(/Horror/i)).toBeInTheDocument();
  });

  test('should render the movie cast', () => {
    expect(screen.getByText(/María Romanillos/i)).toBeInTheDocument();
    expect(screen.getByText(/Ruth Díaz/i)).toBeInTheDocument();
    expect(screen.getByText(/Urko Olazábal/i)).toBeInTheDocument();
  });

  test('should render the movie poster', () => {
    expect(
      screen.getByRole('img', { name: mockMovieDetail.title })
    ).toBeInTheDocument();
  });
});

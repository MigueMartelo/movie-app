import { screen, render } from '@testing-library/react';
import { MovieView } from './MovieView';

jest.mock('@tanstack/react-query', () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: [] }),
  useMutation: () => ({ mutate: jest.fn() }),
}));

const movieMock = {
  adult: false,
  backdrop_path: '/rvFeNpYimvtEEZgkhiBfXJA5oTf.jpg',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 27,
      name: 'Horror',
    },
  ],
  homepage: '',
  id: 1026563,
  imdb_id: 'tt21199996',
  original_language: 'es',
  original_title: '13 exorcismos',
  overview:
    'After participating in a séance, young Laura begins to behave strangely. Alarmed, her parents ask Father Olmedo, one of the few exorcists authorized by the Vatican to intervene in cases of demonic possession, for help.',
  popularity: 732.841,
  poster_path: '/aNlCqSfAV4BhHqaxmXdcaYM4iTF.jpg',
  production_companies: [
    {
      id: 126568,
      logo_path: null,
      name: 'Mr. Fields and Friends',
      origin_country: 'ES',
    },
    {
      id: 29566,
      logo_path: '/wHbtRtUnXGNzX0riQIpq1fcgueq.png',
      name: 'Atresmedia',
      origin_country: 'ES',
    },
    {
      id: 27628,
      logo_path: '/8rluD2KhZHZbEOiAKW5qbBxyD0R.png',
      name: 'Bambú Producciones',
      origin_country: 'ES',
    },
    {
      id: 67412,
      logo_path: '/vgVqq5hunVs8GN5Je9d9rG7Q2NU.png',
      name: 'Movistar+',
      origin_country: 'ES',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'ES',
      name: 'Spain',
    },
  ],
  release_date: '2022-11-04',
  revenue: 1891519,
  runtime: 100,
  spoken_languages: [
    {
      english_name: 'Spanish',
      iso_639_1: 'es',
      name: 'Español',
    },
  ],
  status: 'Released',
  tagline: '',
  title: '13 Exorcisms',
  video: false,
  vote_average: 5.447,
  vote_count: 47,
};
const movieCreditsMock = [
  {
    adult: false,
    gender: 1,
    id: 2545932,
    known_for_department: 'Acting',
    name: 'María Romanillos',
    original_name: 'María Romanillos',
    popularity: 2.283,
    profile_path: '/qXtZPwcbeBWjBToPseV59Tslfxg.jpg',
    cast_id: 6,
    character: 'Laura',
    credit_id: '6329ea37c51acd007a86f6f1',
    order: 0,
  },
  {
    adult: false,
    gender: 1,
    id: 79288,
    known_for_department: 'Acting',
    name: 'Ruth Díaz',
    original_name: 'Ruth Díaz',
    popularity: 2.645,
    profile_path: '/l49eik7LO5l1bNHji3zL2ZaYZi5.jpg',
    cast_id: 5,
    character: 'Carmen',
    credit_id: '6329ea1dcaab6d008204dc0f',
    order: 1,
  },
  {
    adult: false,
    gender: 2,
    id: 1760905,
    known_for_department: 'Acting',
    name: 'Urko Olazábal',
    original_name: 'Urko Olazábal',
    popularity: 0.777,
    profile_path: '/ud4vkcYh9MwBgxdo8IWm51qfxlx.jpg',
    cast_id: 7,
    character: 'Tomás',
    credit_id: '6329ea3dcaab6d008204dc17',
    order: 2,
  },
];
describe('<MovieView />', () => {
  beforeEach(() => {
    render(<MovieView movie={movieMock} movieCredits={movieCreditsMock} />);
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render the movie title', () => {
    expect(
      screen.getByRole('heading', { name: movieMock.title })
    ).toBeInTheDocument();
  });

  test('should render the movie overview', () => {
    expect(screen.getByText(movieMock.overview)).toBeInTheDocument();
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
      screen.getByRole('img', { name: movieMock.title })
    ).toBeInTheDocument();
  });
});

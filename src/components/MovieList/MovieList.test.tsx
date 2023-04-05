import { render, screen } from '@testing-library/react';
import { MovieList } from './MovieList';

const moviesMock = [
  {
    adult: false,
    backdrop_path: '/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg',
    genre_ids: [27, 53],
    id: 980078,
    original_language: 'en',
    original_title: 'Winnie the Pooh: Blood and Honey',
    overview:
      'Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.',
    popularity: 3152.098,
    poster_path: '/s3u70iZ1mpY6W9rW1S6BxDMRNQt.jpg',
    release_date: '2023-01-27',
    title: 'Winnie the Pooh: Blood and Honey',
    video: false,
    vote_average: 5.9,
    vote_count: 327,
  },
  {
    adult: false,
    backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
    genre_ids: [18, 28],
    id: 677179,
    original_language: 'en',
    original_title: 'Creed III',
    overview:
      'After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.',
    popularity: 3014.243,
    poster_path: '/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
    release_date: '2023-03-01',
    title: 'Creed III',
    video: false,
    vote_average: 7.3,
    vote_count: 624,
  },
  {
    adult: false,
    backdrop_path: '/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg',
    genre_ids: [28],
    id: 842945,
    original_language: 'en',
    original_title: 'Supercell',
    overview:
      'Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.',
    popularity: 2816.639,
    poster_path: '/gbGHezV6yrhua0KfAgwrknSOiIY.jpg',
    release_date: '2023-03-17',
    title: 'Supercell',
    video: false,
    vote_average: 6.5,
    vote_count: 41,
  },
  {
    adult: false,
    backdrop_path: '/a2tys4sD7xzVaogPntGsT1ypVoT.jpg',
    genre_ids: [53, 35, 80],
    id: 804150,
    original_language: 'en',
    original_title: 'Cocaine Bear',
    overview:
      'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.',
    popularity: 2673.172,
    poster_path: '/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg',
    release_date: '2023-02-22',
    title: 'Cocaine Bear',
    video: false,
    vote_average: 6.5,
    vote_count: 622,
  },
  {
    adult: false,
    backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: 'en',
    original_title: 'John Wick: Chapter 4',
    overview:
      'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
    popularity: 2600.628,
    poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
    release_date: '2023-03-22',
    title: 'John Wick: Chapter 4',
    video: false,
    vote_average: 8.1,
    vote_count: 710,
  },
];

describe('<MovieList />', () => {
  beforeEach(() => {
    render(<MovieList movies={moviesMock} />);
  });
  test('should render the correct numbers of movies', () => {
    const movieList = screen.getAllByRole('article');
    expect(movieList).toHaveLength(moviesMock.length);
  });

  test('should render the correct movie title', () => {
    const movieTitle = screen.getByText(/Winnie the Pooh: Blood and Honey/i);
    expect(movieTitle).toBeInTheDocument();
  });

  test('should render the correct movie poster', () => {
    const moviePoster = screen.getByAltText(moviesMock[0].title);
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
    expect(movieLink.length).toEqual(moviesMock.length);
  });

  test('should render not found message when the movies is empty', () => {
    render(<MovieList movies={[]} />);
    const notFoundMessage = screen.getByText(/no movies found/i);
    expect(notFoundMessage).toBeInTheDocument();
  });
});

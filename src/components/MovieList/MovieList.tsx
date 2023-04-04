import { Movie } from '@/interfaces';

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <h2>Movies Reproducing Now</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

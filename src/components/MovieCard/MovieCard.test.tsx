import { render, screen, fireEvent } from '@testing-library/react';
import { FavoriteContext } from '@/context/FavoriteContext';
import { MovieCard } from './MovieCard';
import { mockMovie } from '@/__Mocks__';

describe('MovieCard', () => {
  it('should render movie title and release date', () => {
    render(<MovieCard movie={mockMovie} />);

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.release_date)).toBeInTheDocument();
  });

  it('should render movie rating', () => {
    render(<MovieCard movie={mockMovie} />);

    expect(
      screen.getByText(`${mockMovie.vote_average} / 10`)
    ).toBeInTheDocument();
  });

  it('should add and remove from favorites when button is clicked', () => {
    const addToFavorites = jest.fn();
    const removeFromFavorites = jest.fn();
    const favorites = [] as typeof mockMovie[];

    render(
      <FavoriteContext.Provider
        value={{ favorites, addToFavorites, removeFromFavorites }}
      >
        <MovieCard movie={mockMovie} />
      </FavoriteContext.Provider>
    );

    const addButton = screen.getByText('Add Fav');
    fireEvent.click(addButton);
    expect(addToFavorites).toHaveBeenCalledWith(mockMovie);

    const removeButton = screen.getByText('Remove Fav');
    fireEvent.click(removeButton);
    expect(removeFromFavorites).toHaveBeenCalledWith(mockMovie);
  });
});

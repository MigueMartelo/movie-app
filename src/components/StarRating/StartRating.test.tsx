import { render, fireEvent, screen } from '@testing-library/react';
import { useGuestSession, useRateMovie } from '@/hooks';
import { StarRating } from './StarRating';

jest.mock('@/hooks', () => ({
  useGuestSession: jest.fn(),
  useRateMovie: jest.fn(),
}));

describe('<StarRating />', () => {
  const movieId = 123;

  beforeEach(() => {
    // Mock the return values for the hooks
    (useGuestSession as jest.Mock).mockReturnValue({
      data: { guest_session_id: 'guestSessionId' },
    });
    (useRateMovie as jest.Mock).mockReturnValue({ mutate: jest.fn() });
  });

  it('should renders correctly', () => {
    render(<StarRating movieId={movieId} />);

    expect(screen.getByText('Vote:')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(10);
  });

  it('should updates rating and calls rateMovie when a star is clicked', () => {
    render(<StarRating movieId={movieId} />);

    const starButtons = screen.getAllByRole('button');

    fireEvent.click(starButtons[3]);

    expect(starButtons[3].querySelector('span')).toHaveClass('text-yellow-500');

    expect(useRateMovie().mutate).toHaveBeenCalledWith(
      { movieId, rating: 4, guestSessionId: 'guestSessionId' },
      { onSuccess: expect.any(Function) }
    );
  });

  it('should updates hover state when mouse enters and leaves a star', () => {
    render(<StarRating movieId={movieId} />);

    const starButtons = screen.getAllByRole('button');

    fireEvent.mouseEnter(starButtons[7]);
    fireEvent.mouseLeave(starButtons[7]);

    expect(starButtons[7].querySelector('span')).toHaveClass('text-gray-600');
  });
});

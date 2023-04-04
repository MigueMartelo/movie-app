import { useGuestSession, useRateMovie } from '@/hooks';
import { useState } from 'react';

interface IStarRatingProps {
  movieId: number;
}

export const StarRating = ({ movieId }: IStarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { data } = useGuestSession();
  const { mutate: rateMovie } = useRateMovie();
  const guestSessionId = data?.guest_session_id as string;

  const handleClick = (idx: number) => {
    setRating(idx);
    rateMovie(
      { movieId, rating: idx, guestSessionId },
      { onSuccess: () => alert('Your are rated this movie!') }
    );
  };

  return (
    <div className='star-rating'>
      <span className='font-bold'>Vote: </span>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className={
                index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-600'
              }
            >
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};

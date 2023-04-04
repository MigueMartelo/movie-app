import config from '@/config';

const { BASE_URL, API_KEY } = config;

export const getMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/now_playing?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovie = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const getMovieCredits = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}/credits?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const rateMovie = async (movieId: number, rating: number) => {
  const response = await fetch(
    `${BASE_URL}/${movieId}/rating?api_key=${API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        value: rating,
      }),
    }
  );
  const data = await response.json();
  return data;
};

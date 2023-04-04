import config from '@/config';

const { BASE_URL, API_KEY } = config;

export const getMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/now_playing?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

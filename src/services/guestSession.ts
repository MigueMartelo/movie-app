import config from '@/config';

const { API_KEY } = config;

export const getGuestSessionId = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

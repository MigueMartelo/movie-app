import { useQuery } from '@tanstack/react-query';
import { getGuestSessionId } from '@/services';

export const useGuestSession = () =>
  useQuery(['guestSession'], () => getGuestSessionId());

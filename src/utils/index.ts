import { ENVIRONMENT } from '@/types';

export const getEnv = (): ENVIRONMENT => {
  const host = window.location.hostname.toLowerCase();
  const env: ENVIRONMENT =
    host === 'osoftware.co.uk'
      ? 'production'
      : host === 'test.osoftware.co.uk'
        ? 'testing'
        : 'development';
  return env;
};

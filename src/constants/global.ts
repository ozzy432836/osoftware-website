import { ENVIRONMENT } from '@/types';
import { getEnv } from '@/utils';

export enum MENU {
  LANDING = '/',
  HOME = '/home',
}

export const APP_NAME = 'oSoftware Website';

export const APP_DOMAIN = 'osoftware.co.uk';

export const BASE_URLS = {
  development: {
    app: 'http://localhost:5173',
  },
  testing: {
    app: `https://test.${APP_DOMAIN}`,
  },
  production: {
    app: `https://${APP_DOMAIN}`,
  },
};

const ENV: ENVIRONMENT = getEnv();
export const APP_BASE_URL = BASE_URLS[ENV].app;
export const WEB_BASE_URL = `https://${APP_DOMAIN}`;

export const AZURE_STORAGE_URL = 'https://osoftware.blob.core.windows.net/osoftware';

export const LOGO_SMALL_URL = `${AZURE_STORAGE_URL}/logo-square.png`;
export const LOGO_LARGE_URL = `${AZURE_STORAGE_URL}/logo.png`;

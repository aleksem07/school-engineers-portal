export enum APP_ROUTES {
  HOME = '/',
  SETTINGS = '/settings',
  LINUX = '/linux',
  FOOD = '/food',
  CONTACTS = '/contacts',
  FAVORITES = '/favorites',
}

export const SETTINGS_ROUTES = [
  {
    path: `${APP_ROUTES.SETTINGS}/network`,
    name: 'Network',
  },
  {
    path: `${APP_ROUTES.SETTINGS}/disable-content-filter`,
    name: 'Disable Content Filter',
  },
  {
    path: `${APP_ROUTES.SETTINGS}/medical-office`,
    name: 'Medical Office',
  },
];

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
    name: 'Интернет',
  },
  {
    path: `${APP_ROUTES.SETTINGS}/disable-content-filter`,
    name: 'Контент фильтр',
  },
  {
    path: `${APP_ROUTES.SETTINGS}/medical-office`,
    name: 'Мед. кабинет',
  },
  {
    path: `${APP_ROUTES.SETTINGS}/food`,
    name: 'Питание',
  },
];

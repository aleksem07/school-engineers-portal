import { APP_ROUTES } from './routes';

export const LINUX_ROUTES = [
  {
    path: `${APP_ROUTES.LINUX}/network`,
    name: 'Интернет',
  },
  {
    path: `${APP_ROUTES.LINUX}/disable-content-filter`,
    name: 'Контент фильтр',
  },
  {
    path: `${APP_ROUTES.LINUX}/medical-office`,
    name: 'Мед. кабинет',
  },
  {
    path: `${APP_ROUTES.LINUX}/food`,
    name: 'Питание',
  },
];

export enum APP_ROUTES {
  HOME = '/',
  SETTINGS = '/settings',
  LINUX = '/linux',
  FOOD = '/food',
  CONTACTS = '/contacts',
  FAVORITES = '/favorites',
}

export enum SETTINGS_ROUTES {
  NETWORK = `${APP_ROUTES.SETTINGS}/network`,
  DISABLE_CONTENT_FILTER = `${APP_ROUTES.SETTINGS}/disable-content-filter`,
  MEDICAL_OFFICE = `${APP_ROUTES.SETTINGS}/medical-office`,
}

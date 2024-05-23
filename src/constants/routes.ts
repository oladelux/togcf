export enum Routes {
  HOME = '/',
  DONATE = '/donate',
  EVENT = '/events',
  SINGLE_EVENT = '/events/:eventId'
}

export const routes = {
  home: Routes.HOME,
  donate: Routes.DONATE,
  event: Routes.EVENT,
  singleEvent: Routes.SINGLE_EVENT
}

export enum Routes {
  HOME = '/',
  DONATE = '/donate',
  EVENT = '/events',
  ABOUT = '/about',
  SINGLE_EVENT = '/events/:eventId'
}

export const routes = {
  home: Routes.HOME,
  donate: Routes.DONATE,
  event: Routes.EVENT,
  about: Routes.ABOUT,
  singleEvent: Routes.SINGLE_EVENT
}

export enum Routes {
  HOME = '/',
  NG_DONATE = '/ng-donation/',
  INTERNATIONAL_DONATE = '/international-donation/',
  EVENT = '/events',
  ABOUT = '/about',
  SINGLE_EVENT = '/events/:eventId'
}

export const routes = {
  home: Routes.HOME,
  ngDonate: Routes.NG_DONATE,
  internationalDonate: Routes.INTERNATIONAL_DONATE,
  event: Routes.EVENT,
  about: Routes.ABOUT,
  singleEvent: Routes.SINGLE_EVENT
}

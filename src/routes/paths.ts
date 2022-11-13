function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/dashboard'

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  signIn: path(ROOTS_AUTH, '/sign-in'),
  signUp: path(ROOTS_AUTH, '/sign-up'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  forgotPassword: path(ROOTS_AUTH, '/forgot-password')
}

export const PATH_PAGE = {
  home: '/',
  terms: '/terms',
  privacy: '/privacy',
  collections: '/collections',
  licenses: '/licenses',
  help: '/help',
  page404: '/404'
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  profile: path(ROOTS_DASHBOARD, '/profile'),
  account: path(ROOTS_DASHBOARD, '/account'),
  photo: path(ROOTS_DASHBOARD, '/photo'),
  downloads: path(ROOTS_DASHBOARD, '/downloads'),
  orders: path(ROOTS_DASHBOARD, '/orders')
}

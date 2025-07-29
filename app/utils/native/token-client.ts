import Cookies from 'js-cookie'

import { TOKEN_COOKIE_NAME } from './token.utils'

export const getNativeToken = () => {
  return Cookies.get(TOKEN_COOKIE_NAME)
}

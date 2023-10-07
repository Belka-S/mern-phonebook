const { REACT_APP_BACK_URL_DEV, REACT_APP_BACK_URL_PROD } = process.env;

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? `${REACT_APP_BACK_URL_DEV}/api`
    : `${REACT_APP_BACK_URL_PROD}/api`;

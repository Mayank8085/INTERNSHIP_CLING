import jwtDecode from 'jwt-decode';
export const isJwtExpired = (token) => {
  if (typeof(token) !== 'string' || !token) return true;

  let isJwtExpired = false;
  const { exp } = jwtDecode(token);
  const currentTime = new Date().getTime() / 1000;

  if (currentTime > exp) isJwtExpired = true;

  return isJwtExpired;
}



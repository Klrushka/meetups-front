export const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

export const setToken = (token: { token: string }) => {
  sessionStorage.setItem('token', JSON.stringify(token));
};

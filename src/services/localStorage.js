import jwt_decode from "jwt-decode";

const TOKEN_NAME = "token";

const getToken = () => localStorage.getItem(TOKEN_NAME);
const setToken = (token) => localStorage.setItem(TOKEN_NAME, token);
const removeToken = () => localStorage.removeItem(TOKEN_NAME);
const data = getToken() ? jwt_decode(getToken()) : null;
export { getToken, setToken, removeToken, data };

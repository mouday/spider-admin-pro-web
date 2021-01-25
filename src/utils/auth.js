import Cookies from "js-cookie";

const TokenKey = "X-Token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  // 7天有效期
  return Cookies.set(TokenKey, token, { expires: 7 });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

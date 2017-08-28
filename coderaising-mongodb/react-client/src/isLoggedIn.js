let _isLoggedIn = false;
export function setLoggedIn(value = true) {
  _isLoggedIn = value;
}

export default function isLoggedIn() {
  return _isLoggedIn;
};

let _isLoggedIn = false;
export function setLoggedIn() {
  _isLoggedIn = true;
}

export default function isLoggedIn() {
  return _isLoggedIn;
};

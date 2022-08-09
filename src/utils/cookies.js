function saveAuthToCookie(value) {
  document.cookie = `token=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `userName=${value}`;
}

function saveUserSeqToCookie(value) {
  document.cookie = `userSeq=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getUserSeqFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)userSeq\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)userName\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
  saveUserSeqToCookie,
  getUserSeqFromCookie,
};

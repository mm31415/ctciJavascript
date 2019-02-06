const urlify = (s, n) => {
  const resultStringArr = [];
  let prevChar = null;

  for (let i = 0; resultStringArr.length < n; i++) {
    if (s[i] !== ' ') {
      resultStringArr.push(s[i]);
      prevChar = s[i];
    } else if (prevChar && s[i] === ' ') {
      resultStringArr.push('%20');
      prevChar = null;
    }
  }

  return resultStringArr.join('');
};

console.log(urlify('Mr Juan Cantu', 13));
console.log(urlify('Mr Juan Cantu     ', 13));
console.log(urlify('     Mr Juan Cantu     ', 13));
console.log(urlify('     Mr         Juan         Cantu     ', 13));

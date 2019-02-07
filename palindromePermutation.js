const palindromePermutation = s => {
  let spaceCount = 0;
  let unpairedArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      spaceCount++;
      continue;
    }

    let idx = unpairedArr.indexOf(s[i].toLowerCase());
    if (idx !== -1) {
      unpairedArr = unpairedArr.slice(0, idx).concat(unpairedArr.slice(idx + 1));
    } else {
      unpairedArr.push(s[i].toLowerCase());
    }
  }

  if ((s.length - spaceCount) % 2 === 0) return unpairedArr.length === 0;
  else return unpairedArr.length === 1;
};

console.log(palindromePermutation('a'));
console.log(palindromePermutation('aA'));
console.log(palindromePermutation('aba'));
console.log(palindromePermutation('BaAb'));
console.log(palindromePermutation('Ba Ab'));
console.log(palindromePermutation('Ba Dbc'));
console.log(palindromePermutation('"Tact cOA"'));
console.log(palindromePermutation('"T a c   t c    OA"'));
console.log(palindromePermutation('"Tacty cOA"'));

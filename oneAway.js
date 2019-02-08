const oneAway = (string1, string2) => {
  if (Math.abs(string1.length - string2.length) > 1) return false;

  const s1 = string1.length > string2.length ? string2 : string1;
  const s2 = string1.length > string2.length ? string1 : string2;

  let i = 0, j = 0;
  let different = false;

  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      if (different) return false;
      different = true;
      if (s1.length === s2.length) i++;
    } else {
      i++;
    }
    j++;
  }

  return true;
};

console.log(oneAway('pale', 'pales'));
console.log(oneAway('pale', 'pasle'));
console.log(oneAway('pale', 'ple'));
console.log(oneAway('pale', 'pale'));
console.log(oneAway('bale', 'pale'));
console.log(oneAway('bale', 'pasle'));
console.log(oneAway('bale', 'basle'));
console.log(oneAway('bale', 'blae'));

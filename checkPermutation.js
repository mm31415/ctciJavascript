const checkPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const letterHash = { };

  for (let i = 0; i < s1.length; i++) {
    if (!letterHash[s1[i]]) letterHash[s1[i]] = 1;
    else letterHash[s1[i]]++;
  }

  for (let i = 0; i < s2.length; i++) {
    if (!letterHash[s2[i]]) return false;
    else letterHash[s2[i]]--;
  }

  return true;
};

console.log(checkPermutation("candy", "ndacy"));
console.log(checkPermutation("candy", "ndaay"));
console.log(checkPermutation("candy", "nday"));

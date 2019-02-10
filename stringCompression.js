const stringCompression = string => {
  if (string.length <= 2) return string;
  const charArr = [];
  let charCount = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      charArr.push(string[i - 1]);
      charArr.push(charCount);
      charCount = 1;
    } else {
      charCount++;
    }
  }

  charArr.push(string[string.length - 1]);
  if (charCount > 1) charArr.push(charCount);

  return charArr.length < string.length ? charArr.join('') : string;
};

console.log(stringCompression('') || 'empty string');
console.log(stringCompression('ad'));
console.log(stringCompression('dd'));
console.log(stringCompression('ddaa'));
console.log(stringCompression('ddaaa'));
console.log(stringCompression('ddaac'));
console.log(stringCompression('ddaaaccccccbbbccccmm'));
console.log(stringCompression('ddaaaccccccbbbcccc'));
console.log(stringCompression('ddaaaccccccbbbccccd'));

const rotateMatrix = matrix => {
  let n = matrix.length - 1;

  for (let i = 0; i <= n; i++) {
    let j = n - i;
    for (let k = 0; k <= j; k++) {
      let temp = matrix[i][j - k];
      matrix[i][j - k] = matrix[i + k][j];
      matrix[i + k][j] = temp;
    }
  }

  for (let i = 0; i <= n; i++) {
    let k = 0, l = n;
    while (k < l) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[i][l];
      matrix[i][l] = temp;

      k++;
      l--;
    }
  }

  return matrix;
};

console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

console.log(rotateMatrix([
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]));

console.log(rotateMatrix([
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]));

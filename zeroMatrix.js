const zeroMatrix = matrix => {
  let firstRowZero = false;
  let firstColZero = false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) firstColZero = true;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) firstRowZero = true;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // skip [0][0], will handle this at end
  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) zeroCol(matrix, i);
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) zeroRow(matrix, i);
  }

  if (firstColZero) zeroCol(matrix, 0);
  if (firstRowZero) zeroRow(matrix, 0);

  return matrix;
};

const zeroCol = (matrix, col) => {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
};

const zeroRow = (matrix, row) => {
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[row][col] = 0;
  }
};

console.log(zeroMatrix([
  [1,2,3,4,0],
  [1,6,3,4,5],
  [1,6,3,4,5],
  [1,2,3,4,0],
]));

console.log(zeroMatrix([
  [1,2,3,4,0],
  [1,0,3,4,5],
  [1,2,3,4,0],
  [1,2,0,4,9],
  [1,0,3,4,1],
  [1,2,3,4,1],
]));

console.log(zeroMatrix([
  [1,2,3,4,0],
  [1,5,3,4,5],
  [1,2,3,4,0],
  [1,2,8,4,9],
  [1,0,3,4,1],
  [1,2,3,4,1],
]));

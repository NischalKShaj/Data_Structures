// ======================> file to find the riversize of the matrix <==================== //

let riverSize = (matrix) => {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        const size = exploreRiver(matrix, i, j);
        arr.push(size);
      }
    }
  }
  return arr;
};
let exploreRiver = (matrix, i, j) => {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] !== 1
  ) {
    return 0;
  }
  matrix[i][j] = 0;
  let size = 1;
  size += exploreRiver(matrix, i + 1, j);
  size += exploreRiver(matrix, i - 1, j);
  size += exploreRiver(matrix, i, j + 1);
  size += exploreRiver(matrix, i, j - 1);

  return size;
};

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const result = riverSize(matrix);
console.log(result);

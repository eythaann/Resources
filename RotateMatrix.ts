const ARR = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const ARR2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const ARR4 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

// O(N/2 * log2(N))

const rotateMatrix = (matrix: number[][]) => {
  const totalLayers = matrix.length / 2;

  //last is the contrary of the actual iteration
  const last = matrix.length - 1;

  //k is the actual layer index
  for (let k = 0; k < totalLayers; k++) {
    //n is the number of iterations in actual layer
    const n = matrix.length - 1 - k;

    for (let i = k; i < n; i++) {
      const temp = matrix[k][i];
      matrix[k][i] = matrix[last - i][k];
      matrix[last - i][k] = matrix[last - k][last - i];
      matrix[last - k][last - i] = matrix[i][last - k];
      matrix[i][last - k] = temp;
    }
  }

  return matrix;
};

console.log(rotateMatrix(ARR4));

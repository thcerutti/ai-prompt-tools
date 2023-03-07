const combineAllMatrixElements = (matrix) => {
  if (matrix.length === 0) {
    return [[]];
  }

  const [firstRow, ...remainingRows] = matrix;
  const remainingCombinations = combineAllMatrixElements(remainingRows);
  const combinations = [];

  for (let i = 0; i < firstRow.length; i++) {
    for (let j = 0; j < remainingCombinations.length; j++) {
      combinations.push([firstRow[i], ...remainingCombinations[j]]);
    }
  }

  return combinations;
};

export default combineAllMatrixElements;

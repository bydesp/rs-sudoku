module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        let impossible = []
        for (let index = 0; index < 9; index++) {
          impossible.push(matrix[row][index])
          impossible.push(matrix[index][col])
        }
        const startRow = Math.floor(row / 3) * 3
        const startCol = Math.floor(col / 3) * 3
        for (qRow = startRow; qRow < startRow + 3; qRow++) {
          for (qCol = startCol; qCol < startCol + 3; qCol++) {
            impossible.push(matrix[qRow][qCol])
          }
        }
        const possibles = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(digit => impossible.indexOf(digit) < 0)
        for (let possible = 0; possible < possibles.length; possible++) {
          matrix[row][col] = possibles[possible]
          const solve = solveSudoku(matrix)
          if (solve) return solve
        }
        matrix[row][col] = 0
        return false
      }
    }
  }
  return matrix
}

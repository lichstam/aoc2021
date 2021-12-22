const checkCol = (matrix) => {
  for (i = 0; i < matrix.length; i++) {
    let count = 0
    for (k = 0; k < matrix[0].length; k++) {
      if (matrix[k][i] === undefined) {
        ++count
        if (count === matrix.length) {
          return true
        }
      }
    }
  }
}

const checkRow = (matrix) => {
  for (i = 0; i < matrix[0].length; i++) {
    let count = 0
    for (k = 0; k < matrix.length; k++) {
      if (matrix[i][k] === undefined) {
        ++count
        if (count === matrix[0].length) {
          return true
        }
      }
    }
  }
}


let found
const count = (arr, winningArr) => {
  const winning = winningArr.find((i, winningIndex) => {
    return arr.find((matrix, matrixIdx) => {
      if (!matrix) return false
      matrix.forEach((row, rowidx) => {
        const nextRow = row.map((y) => {
          if (y === i) return 
          return y
        })
        matrix[rowidx] = nextRow
      })

      const foundMatrix = (() => {
        if (checkRow(matrix)) return true
        if (checkCol(matrix)) return true
      })()

      if (foundMatrix) {
        arr.splice(matrixIdx, 1, undefined)
      }
      if (foundMatrix && winningIndex === winningArr.length - 1 || arr.filter(Boolean).length === 0) {
        found = matrix
        return foundMatrix
      }
    })
  })

  if (winning) { 
    const sum = found.reduce((sum, row) => {
      const filteredRow = row.filter(Boolean)
      const sumRow = filteredRow.reduce((rowSum, digit) => rowSum + digit, 0)
      return sum + sumRow
    }, 0)
    return sum * winning
  }
}

console.log(count(arr, winningProd))

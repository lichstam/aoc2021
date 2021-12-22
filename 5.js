const lines = {}

const registerDiagonal = (coordinates) => {
  const [first, second] = coordinates.sort((a, b) => a[0] - b[0])
  const yDistance = second[1] - first[1]
  const xDistance = second[0] - first[0]
  if (Math.abs(xDistance) === Math.abs(yDistance)) {
    for (i = 0; i <= xDistance; i++) {
      if (yDistance > 0) {
        lines[`${first[0] + i}-${first[1] + i}`] = lines[`${first[0] + i}-${first[1] + i}`] ? ++lines[`${first[0] + i}-${first[1] + i}`] : 1 
      } else {
        lines[`${first[0] + i}-${first[1] - i}`] = lines[`${first[0] + i}-${first[1] - i}`] ? ++lines[`${first[0] + i}-${first[1] - i}`] : 1 
      }
    }
  }
}

const registerLineX = (static, unsorted) => {
  let [first, stop] = unsorted.sort((a, b) => a - b)
  for (i = first; i <= stop; i++) {
    lines[`${i}-${static}`] = lines[`${i}-${static}`] ? ++lines[`${i}-${static}`] : 1 
  }
}

const registerLineY = (static, unsorted) => {
  let [first, stop] = unsorted.sort((a, b) => a - b)
  for (i = first; i <= stop; i++) {
    lines[`${static}-${i}`] = lines[`${static}-${i}`] ? ++lines[`${static}-${i}`] : 1 
  }
}

const getOverlaps = (arr) => {
  arr.forEach(([first, second]) => {
    const [x1, y1] = first.split(',').map(Number)
    const [x2, y2] = second.split(',').map(Number)
    if (x1 === x2) registerLineY(x1, [y1, y2])
    if (y1 === y2) registerLineX(y1, [x1, x2])
    registerDiagonal([ [x1, y1], [x2, y2] ])
  })
  return lines
}

const result = getOverlaps(arr)
console.log(Object.values(result).filter(i => i > 1).length)

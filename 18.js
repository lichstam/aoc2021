const flattenPair = (data, depth = 1) => data.flatMap((item) => {
  if (typeof item === 'number') return [depth, [ item ]]
  return flattenPair(item, depth + 1)
}, [])

const explode = (p, p5) => {
  const tempP = p.slice()
  const sub = tempP.splice(p5, 4)
  const [[ left ], [ right ]] = sub.filter((item) => typeof item === 'object')
  if (p5 > 0) {
    tempP[p5 - 1][0] += left
  }
  if (p5 < tempP.length) {
    tempP[p5 + 1][0] += right
  }
  return [ ...tempP.slice(0, p5), ...[sub[0] - 1, [0]], ...tempP.slice(p5)]
}

const split = (p, p10) => {
  const [n] = p[p10]
  const d = p[p10 - 1]
  const result = p.slice(0, p10 - 1).concat([d + 1, [Math.floor(n / 2)], d + 1, [Math.ceil(n / 2)]].concat(p.slice(p10 + 1)))
  return result
}

const add = (line1, line2) => {
  let next = [...line1, ...line2].map(i => typeof i === 'number' ? ++i : i)
  while (true) {
    const p5 = next.findIndex((item) => typeof item === 'number' && item > 4)
    if (p5 > -1) {
      next = explode(next, p5)
      continue
    }
    const p10 = next.findIndex((item) => item[0] > 9)
    if (p10 > -1) {
      next = split(next, p10)
      continue
    }
    break
  }
  return next
}


const calculateMagnitude = (p) => {
  while (p.length > 2) {
    const foundIdx = p.findIndex(( item, i ) => {
      if (typeof item === 'number' && typeof p[i + 2] === 'number') {
        return item === p[i + 2]
      }
    })
    if (foundIdx < 0) break
    const left = p[foundIdx + 1]
    const right = p[foundIdx + 3]
    const d = p[foundIdx]
    p = [ ...p.slice(0, foundIdx), ...[d - 1, [ left * 3 + right * 2 ]], ...p.slice(foundIdx + 4)]
  }
  return p
}

const start = (arrays) => {
  const arr = arrays.map((i) => flattenPair(i)).reduce(add)
  const res = calculateMagnitude(arr)
  let highest = 0
  for (l1 = 0; l1 < arrays.length; l1++) {
    for (l2 = 0; l2 < arrays.length; l2++) {
      if (l1 !== l2) {
        const sum = add(flattenPair(arrays[l1]), flattenPair(arrays[l2]))
        highest = Math.max(calculateMagnitude(sum)[1][0], highest)
      }
    }
  }
  return {part1: res, part2: highest}
}


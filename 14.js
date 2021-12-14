const getInitialPairs = (temp) => temp.split('').reduce((tot, b, i) => (i>0 && (tot[temp[i - 1] + b] = 1), tot), {})

const sum = (obj, key, amount) => {
  if (key in obj) obj[key] += amount
  else obj[key] = amount
}

const getPolymer = (pairs, steps = 40) => {
  if (steps === 0) return pairs
  const nextTemp = Object.keys(pairs).reduce((next, pair) => {
    sum(next, pair[0] + rules[pair], pairs[pair])
    sum(next, rules[pair] + pair[1], pairs[pair])
    return next
  }, {})

  return getPolymer(nextTemp, --steps)
}

const count = (pairs) => Object.entries(pairs).reduce((tot, [pair, amount]) => {
  sum(tot, pair[0], amount / 2)
  sum(tot, pair[1], amount / 2)
  return tot
}, {})

// -----
const result = getPolymer(getInitialPairs(template), 40)
const counted = count(result)
const sorted = Object.values(counted).sort((a, b) => b - a)
console.log(sorted[0] - sorted.slice(-1))

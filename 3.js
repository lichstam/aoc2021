const count = (all) => {
  const reduced = all.reduce((tot, row) => {
    row.split('').forEach((bit, i) => {
      if (!tot[i]) tot[i] = 0
      if (bit === '1') tot[i]++
    })
    return tot
  }, {})
  return Object.values(reduced)
}

const rec = (all, idx = 0) => {
  if (all.length === 1) return all.pop()
  const filtered = all.filter((row) => {
    if (count(all)[idx] >= all.length / 2) { 
      return row[idx] === '1' 
    } else {
      return row[idx] === '0' 
    }
  })
  return rec(filtered, ++idx)
}

const recb = (all, idx = 0) => {
  if (all.length === 1) {
    return all.pop()
  }
  const filtered = all.filter((row) => {
    if (count(all)[idx] < all.length / 2) { 
      return row[idx] === '1' 
    } else {
      return row[idx] === '0' 
    }
  })
  return recb(filtered, ++idx)
}


const a = parseInt(rec(arr), 2)
const b = parseInt(recb(arr), 2)

console.log(a* b) 

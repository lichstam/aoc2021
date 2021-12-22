const day6 = (fishes) => {
  const buckets = new Array(9).fill(0)
  fishes.forEach(fish=>{ buckets[fish]++ })
  for(let i=0 , l = 256 ; i < l; i++) {
    const b = buckets.shift()
    buckets.push(b) 
    buckets[6]+=b
  }
  let total = 0
  buckets.forEach(b=>{ total+=b }) 
  return total
}


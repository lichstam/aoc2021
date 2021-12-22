const getIsOnTarget = (v0x, v0y, xinterval, yinterval) => {
  let x = 0
  let y = 0
  const [xmin, xmax] = xinterval 
  const [ymin, ymax] = yinterval 
  while (true) {
    x+= v0x
    y+= v0y 
    if (x >= xmin && x <= xmax && y >= ymin && y <= ymax) return true
    if (x > xmax || y < ymin) return false
    v0x > 0 ? v0x-=1 : v0x < 0 ? v0x+=1 : 0
    v0y--
  }
}

const getEveryVelocity = (xmap, ymap) => {
  const v = {}
  for (let x = -100; x < 1000; x++) {
    for (let y = -1000; y < 1000; y++) {
      const isOnTarget = getIsOnTarget(x, y, xmap, ymap)
      if (isOnTarget) v[`${x},${y}`] = true
    }
  }
  return v
}

const xmap = [217, 240]
const ymap = [-126, -69]

console.log(Object.keys(getEveryVelocity(xmap, ymap)).length)


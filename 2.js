const count = () => {
  return arr.reduce((tot, [dir, steps]) => {
    switch (dir) {
      case 'forward': {
        tot.horizontal+= steps
        break
      }
      case 'up': {
        tot.depth -= steps
        break
      }
      case 'down': {
        tot.depth += steps
        break
      }
    }
    return tot
  }, { depth: 0, horizontal: 0})
}


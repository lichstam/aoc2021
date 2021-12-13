const fold = (values, toFold) => {
	if (toFold.length === 0) return values
	const nextDots = {}
	const [axis, value] = toFold.shift().split('=')
	values.forEach((c) => {
		const [x, y] = c.split(',').map(Number)
		if (axis === 'x') {
			nextXy = `${value - Math.abs(x - value)},${y}` 
		}
		else {
			nextXy = `${x},${value - Math.abs(y - value)}` 
		}
		nextDots[nextXy] = true
	})
	return fold(Object.keys(nextDots), toFold)
}

const paint = (points) => {
  const msg = Array.from(Array(7), () => Array(40).fill(' '));
  for (const point of points) {
    const [x, y] = point.split(',').map(Number);
    msg[y][x] = '#';
  }
  console.log(msg.map(row => row.join('')).join('\n'));
}


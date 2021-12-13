const fold = (values = testValues, toFold = ['y=7','x=5' ]) => {
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

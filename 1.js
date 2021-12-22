const countBlocks = arr.reduce((a, b, i) => {
    if (i > 1) a[i - 2] = b + arr[i - 1] + arr[i - 2]
    return a
}, [])

const count = countBlocks.filter((item, i, arr) => (item > arr[i - 1]))

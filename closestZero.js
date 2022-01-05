const closest = arr => {
  let result = 0
  let closest = Number.MAX_SAFE_INTEGER

  for (let number of arr) {
    if (Math.abs(number) < closest) {
      closest = Math.abs(number)
      result = number
    } else if (Math.abs(number) === closest) {
      result = Math.abs(number)
    }
  }

  return result
}

console.log(closest([2, 3, 5, 10, -1, -9, -5, 3]))

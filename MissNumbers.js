const arr = [1, 6, 5, 3, 4, 10]

const FindNumbers = (arr, n) => {
  arr.sort((a, b) => a - b)
  const missNumbers = []

  if (arr[0] < 1) return new Error('The Array has a number smaller that ' + 1)
  if (arr[arr.length - 1] > n) return new Error('The Array has a number bigger that' + n)
  if (arr[arr.length - 1] !== n) arr.push(n), missNumbers.push(n)

  let expected = 1
  for (let i = 0; i < arr.length; i++) {
    if (expected !== arr[i]) {
      missNumbers.push(expected)
      i--
    }
    expected++
  }

  return missNumbers
}

console.log(FindNumbers(arr, 15))

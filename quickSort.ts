const numbersTotry = [10, 10, 11, 6, 7, 3, 5, 7, 2, 'c', 1, 'b', 0]; // [0,1,2,3,5,6,7,10.10,11]

function quickSort(data: Array<number | string>): Array<number | string> {
  if (data.length < 1) {
    return [];
  }

  const pivot = data[0];
  const left = [];
  const right = [];

  for (let i = 1; i < data.length; i++) {
    const number = data[i];
    if (number <= pivot) {
      left.push(number);
    } else {
      right.push(number);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(numbersTotry));

export const BinarySearch = (
  array: { id: number }[],
  objective: number,
  left = 0,
  right = array.length - 1,
): number => {
  while (left <= right) {
    const mid: number = Math.round(left + (right - left) / 2);
    if (array[mid].id === objective) return mid;
    if (array[mid].id > objective) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};

console.log(BinarySearch([{id:1}, {id:10}, {id:20}, {id:33}, {id:50}], 33))
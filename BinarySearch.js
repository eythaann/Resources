const BinarySearch = (array, objective, left = 0, right = array.length - 1) => {
  while (left <= right) {
    let mid = Math.round(left + (right - left) / 2);
    if (array[mid].id === objective) return mid;
    if (array[mid].id > objective) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};

export default BinarySearch;

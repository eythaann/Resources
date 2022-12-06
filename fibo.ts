const arr = [0n, 1n];

const fibo = (n: number) => {
  if (arr[n - 1] !== undefined) return arr[n - 1];

  for (let i = arr.length; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n - 1];
};

const factorial = (n: number): bigint => {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(fibo(100));
console.log(factorial(50));

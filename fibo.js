let arr = [0n,1n]

const fibo = (n) =>{
    if(arr[n-1]!==undefined) return arr[n-1]

    for(let i=arr.length; i<n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }

    return arr[n-1]
}

export default fibo
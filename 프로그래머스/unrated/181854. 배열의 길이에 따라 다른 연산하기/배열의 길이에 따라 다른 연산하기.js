function solution(arr, n) {
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.length % 2 === 1){
            i % 2 === 0 ? array.push(arr[i] + n) : array.push(arr[i])
        }else{
            i % 2 === 1 ? array.push(arr[i] + n) : array.push(arr[i])
        }
    }
    return array
}
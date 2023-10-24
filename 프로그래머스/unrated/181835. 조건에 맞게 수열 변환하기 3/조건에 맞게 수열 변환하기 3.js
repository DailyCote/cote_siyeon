function solution(arr, k) {
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(k % 2 === 1){
            array.push(arr[i] * k)
        }else if(k % 2 === 0){
            array.push(arr[i] + k)
        }
    }
    return array
}
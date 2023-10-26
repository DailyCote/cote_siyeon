function solution(arr) {
    let array = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i]; j++){
            array.push(arr[i])
        }
    }
    return array
}
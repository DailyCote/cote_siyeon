function solution(array, n) {
    const arr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === n){
            arr.push(array[i])
        }
    }
    return arr.length
}
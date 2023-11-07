function solution(x, n) {
    let arr = [];
    let i = x
    while(arr.length !== n){
        arr.push(x)
        x = x + i
    }
    return arr
}
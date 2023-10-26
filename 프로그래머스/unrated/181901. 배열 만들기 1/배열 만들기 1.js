function solution(n, k) {
    let arr = [];
    for(let i = n; i > 0; i--){
        if(i % k === 0){
            arr.push(i)
        }
    }
    arr.sort((a, b)=> a -b)
    return arr
}
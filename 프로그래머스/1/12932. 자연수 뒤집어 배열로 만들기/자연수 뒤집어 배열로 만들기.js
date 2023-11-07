function solution(n) {
    let arr = [];
    let m = n.toString()
    for(let i = m.length; i > 0; i--){
        arr.push(m[i - 1] * 1)
    }
    return arr;
}
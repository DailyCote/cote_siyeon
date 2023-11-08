function solution(x) {
    let a = 0;
    let s = x.toString();
    for(let i = 0; i < s.length; i++){
        a += s[i] * 1
    }
    console.log(x, a)
    return Number.isInteger(x / a)
}
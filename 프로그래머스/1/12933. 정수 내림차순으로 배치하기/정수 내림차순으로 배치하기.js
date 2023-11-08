function solution(n) {
    let s = n.toString();
    let ans = [];
    for(let i = s.length - 1; i >= 0; i--){
        ans.push(s[i])
    }
    return ans.sort((a, b)=> {return b - a}).join("") * 1
}
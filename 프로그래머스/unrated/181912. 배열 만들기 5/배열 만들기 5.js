function solution(intStrs, k, s, l) {
    let arr = [];
    for(let i = 0; i < intStrs.length; i++){
        if(intStrs[i].substr(s, l) > k){
            arr.push(intStrs[i].substr(s, l) * 1)
        }
    }
    return arr
}
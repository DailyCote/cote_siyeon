function solution(n_str) {
    let a = n_str
    for(let i = 0; i < n_str.length; i++){
        if(a.startsWith("0")){
            a = a.slice(1);
        }
    }
    return a
}
function solution(s){
    let p = 0;
    let y = 0;
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p"){
            p += 1
        }else if(s[i] === "y"){
            y += 1
        }
    }
    return p === y ? true : false
}
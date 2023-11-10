function solution(my_string, m, c) {
    let str = "";
    for(let i = 0; i < my_string.length; i++){
        if(i % m === c - 1){
            str += my_string[i];
        }
    }
    return str
}
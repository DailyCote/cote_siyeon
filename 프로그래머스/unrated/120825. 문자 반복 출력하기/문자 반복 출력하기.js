function solution(my_string, n) {
    let repeat = "";
    for(let i = 0; i < my_string.length; i++){
        repeat += my_string.slice(i, i+1).repeat(n)
    }
    return repeat;
}
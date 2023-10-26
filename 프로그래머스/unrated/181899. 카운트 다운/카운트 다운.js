function solution(start, end_num) {
    let arr = [];
    for(let i = 0; i < start - end_num + 1; i++){
        arr.push(start - i)
    }
    return arr
}
function solution(num_list, n) {
    let arr = [];
    arr.push(num_list[0])
    for(let i = n; i < num_list.length; i+=n){
        arr.push(num_list[i])
    }
    return arr;
}
function solution(num_list) {
    let a = num_list[num_list.length - 1];
    let b = num_list[num_list.length - 2];
    a > b ? num_list.push(a - b) : num_list.push(a * 2)
    return num_list;
}
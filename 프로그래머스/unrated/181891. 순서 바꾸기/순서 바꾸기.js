function solution(num_list, n) {
    let a = num_list.splice(n);
    let b = num_list.slice(0,n);
    console.log(a, b)
    let newArr = [...a, ...b];
    return newArr
}
function solution(arr, delete_list) {
    let newArr = [];
    newArr = arr.filter((item, index)=> !delete_list.includes(item))
    return newArr
}
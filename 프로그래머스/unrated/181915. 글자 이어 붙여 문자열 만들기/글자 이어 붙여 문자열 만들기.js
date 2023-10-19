function solution(my_string, index_list) {
    let arr = [];
    index_list.map((item, index)=>{
        arr.push(my_string[item])
    })
    return arr.join('')
}
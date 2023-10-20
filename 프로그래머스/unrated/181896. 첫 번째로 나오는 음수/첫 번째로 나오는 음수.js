function solution(num_list) {
    const findIndex = num_list.findIndex((item)=>{
        return item < 0
    })
    return findIndex
}
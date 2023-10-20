function solution(num_list, n) {
    const filter = num_list.filter((item, index)=>{
      return index < n
    })
    return filter
}
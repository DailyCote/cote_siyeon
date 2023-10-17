function solution(strlist) {
    let list = [];
    strlist.map((arr, index)=>{
        return list.push(arr.length);
    })
    return list;
}
function solution(names) {
    let a = [];
    names.map((item, index)=>{
        if(index % 5 === 0){
            a.push(item)
        }
    })
    return a
}
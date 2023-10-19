function solution(str_list, ex) {
    let arr = [];
    str_list.map((item)=>{
        if(item.includes(ex) === false){
            arr.push(item)
        }
    })
    return arr.join('');
}
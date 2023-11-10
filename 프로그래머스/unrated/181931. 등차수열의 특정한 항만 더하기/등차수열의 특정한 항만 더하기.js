function solution(a, d, included) {
    let total = 0;
    for(let i = 0; i < included.length; i++){
        if(included[i] === true && i === 0){
            total += a
        }else if(included[i] === true){
            total += a + d * (i)
        }
    }
    return total
}
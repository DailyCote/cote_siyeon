function solution(n) {
    const array = [];
    for(n; n > 0; n--){
        if(n % 2 !== 0){
            array.push(n)    
        }
    }
    array.sort((a,b)=>{return a-b})
    return array
}
function solution(my_string) {
    let total = 0;
    for(let i = 0; i< my_string.length; i++){
        if(isNaN(my_string[i]) === false){
            total += Number(my_string[i])
        }
    }
    return total;
}
function solution(numbers, n) {
    let total = 0
    for(let i = 0; i < numbers.length; i++){
        if(total > n){
            break;
        }
        total += numbers[i];
    }
        return total
}
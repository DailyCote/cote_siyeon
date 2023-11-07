function solution(n) {
    let total = 0;
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            total += i
        }
    }
    return total
}
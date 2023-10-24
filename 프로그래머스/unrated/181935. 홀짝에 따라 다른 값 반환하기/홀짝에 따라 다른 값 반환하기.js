function solution(n) {
    let total = 0;
    if(n % 2 === 1){
        for(let i = n; i > 0; i--){
            if(i % 2 === 1){
                total += i
            }
        }
    }else if(n % 2 === 0){
        for(let i = n; i > 0; i--){
            if(i % 2 === 0){
                total += i * i
            }
        }
    }
    return total;
}
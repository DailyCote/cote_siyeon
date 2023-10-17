function solution(n) {
    let number = n.toString();
    let total = 0;
    for(let i = 0; i < number.length; i ++){
        total += number.slice(i, i+1) * 1;
    }
    return total
}
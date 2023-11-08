function solution(a, b) {
    let total = 0;
    let sm = 0;
    let lg = 0;
    if(a <= b){
        sm = a;
        lg = b;
    }else if(a > b){
        sm = b;
        lg = a;
    }
    for(let i = sm; i <= lg; i++){
        total += i
    }
    return total
}
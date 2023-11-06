function solution(order) {
    let orderStr = order.toString();
    let total = 0;
    for(let i = 0; i < orderStr.length; i++){
        if(orderStr[i] === "3" || orderStr[i] === "6" || orderStr[i] === "9"){
            total += 1;
        }
    }
    return total
}
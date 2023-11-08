function solution(number) {
    let sum = 0;
    let strNumber = number.toString();
    
    for (let i = 0; i < strNumber.length; i++) {
        sum += parseInt(strNumber[i]);
    }
    
    return sum % 9;
}
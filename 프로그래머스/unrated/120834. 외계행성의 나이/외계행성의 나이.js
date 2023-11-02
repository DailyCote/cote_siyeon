function solution(age) {
    let result = "";
    let ageStr = String(age);
    for(let i = 0; i < ageStr.length; i++){
        result += String.fromCharCode(parseInt(ageStr[i]) + 97);
    }
    return result;
}

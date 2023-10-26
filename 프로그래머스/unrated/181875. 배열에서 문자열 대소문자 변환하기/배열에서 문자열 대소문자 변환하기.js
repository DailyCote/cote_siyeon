function solution(strArr) {
    let arr = [];
    let isOdd = (a) => a % 2 === 1;
    for(let i = 0; i < strArr.length; i++){
        if(i % 2 === 1){
            arr.push(strArr[i].toUpperCase())
        }else if(i % 2 === 0){
            arr.push(strArr[i].toLowerCase())
        }
    }
    return arr
}
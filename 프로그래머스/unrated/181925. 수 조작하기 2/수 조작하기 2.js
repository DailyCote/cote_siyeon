function solution(numLog) {
    let str = "";
    for(let i = 0; i < numLog.length -1; i++){
        if(numLog[i + 1] - numLog[i] === 1){
            str += "w"
        }else if(numLog[i + 1] - numLog[i] === -1){
            str += "s"
        }else if(numLog[i + 1] - numLog[i] === 10){
            str += "d"
        }else{
            str += "a"
        }
    }
    return str
}
function solution(a, b) {
    let strA = a.toString();
    let strB = b.toString();
    let ab = (strA + strB) * 1
    let ba = 2 * a * b
    if(ab > ba){
        return ab
    }else if(ba > ab){
        return ba
    }else{
        return ab
    }
}
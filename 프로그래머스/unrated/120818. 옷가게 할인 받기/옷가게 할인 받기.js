function solution(price) {
    if(price >= 500000){
        return Math.trunc(price * 0.80)
    } else if (500000 > price && price >= 300000){
        return Math.trunc(price * 0.90)
    } else if (300000 > price && price >= 100000){
        return Math.trunc(price * 0.95)
    } else {
        return Math.trunc(price)
    }
}
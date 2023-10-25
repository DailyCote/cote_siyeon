function solution(numbers) {
    let arr = numbers.sort((a, b)=>{
        return a - b
    })
    
    let b = arr[arr.length -1] * arr[arr.length -2];
    let c = arr[0] * arr[1];
    
    if(b > c){
        return b
    }else if(c > b){
        return c
    }else if(b === c){
        return b
    }
}
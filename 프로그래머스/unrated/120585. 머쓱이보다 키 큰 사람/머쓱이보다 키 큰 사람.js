function solution(array, height) {
    array.sort(function(a,b){
        return a - b;
    })
    let taller = [];
    for(let i = 0; i <= array.length; i ++){
        if(array[i] > height){
            taller.push(array[i]);
        }
    }
    return taller.length
}
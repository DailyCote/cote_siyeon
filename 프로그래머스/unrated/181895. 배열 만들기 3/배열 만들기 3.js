function solution(arr, intervals) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i >= intervals[0][0] && i <= intervals[0][1]){
            newArr.push(arr[i])
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(i >= intervals[1][0] && i <= intervals[1][1]){
            newArr.push(arr[i])
        }
    }
    return newArr
}
function solution(myString) {
    let arr = myString.split('x')
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i].length)
    }
    return newArray
}
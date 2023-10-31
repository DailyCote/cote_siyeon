function solution(array) {
    let newArr = [...array].sort((a, b)=> b - a)
    let max = newArr[0]
    let ind = array.indexOf(max)
    return [newArr[0], ind]
}
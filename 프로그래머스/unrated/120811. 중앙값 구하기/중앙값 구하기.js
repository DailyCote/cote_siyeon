function solution(array) {
    const newArray = array.sort((a, b)=>{
  return a - b;
})
    return newArray[Math.floor(newArray.length /2)]
}
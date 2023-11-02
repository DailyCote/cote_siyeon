function solution(myString) {
    return myString.split("x").filter((item)=>{return item !== ""}).sort()
}
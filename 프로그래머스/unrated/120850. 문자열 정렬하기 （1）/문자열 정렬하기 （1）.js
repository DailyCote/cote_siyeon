function solution(my_string) {
    let arr = my_string.replace(/[a-zA-Z]/g, "").split("").sort((a, b)=> a -b)
    const mapfn = (arg) => Number(arg);
    return arr.map(Number)
}
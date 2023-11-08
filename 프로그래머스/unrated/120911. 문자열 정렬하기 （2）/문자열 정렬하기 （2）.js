function solution(my_string) {
    let s = my_string.toLowerCase();
    return s.split("").sort().join("")
}
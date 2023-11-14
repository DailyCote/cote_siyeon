function solution(my_string, s, e) {
    let front = my_string.slice(0, s)
    let back = my_string.slice(e + 1)
    for(let i = e; i >= s; i--){
        front += my_string[i]
    }
    return front + back
}
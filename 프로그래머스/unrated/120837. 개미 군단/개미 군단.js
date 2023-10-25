function solution(hp) {
    let x = parseInt(hp / 5)
    let y = parseInt(hp % 5 / 3)
    let z = parseInt(hp % 5 % 3 / 1)
    return x + y + z;
}
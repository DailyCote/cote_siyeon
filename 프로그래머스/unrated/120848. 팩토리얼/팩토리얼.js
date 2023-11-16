function solution(n) {
    let i = 0;
    let factorial = 1;
    while (factorial <= n) {
        i++;
        factorial *= i;
    }
    return i - 1;
}
function solution(n, k) {
    let service = parseInt(n/10) * 2000
    return (12000*n + 2000*k - service)
}
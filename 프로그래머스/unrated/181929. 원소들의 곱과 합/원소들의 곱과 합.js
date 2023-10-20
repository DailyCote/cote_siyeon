function solution(num_list) {
    let x = 1;
    let square = 0;
    for(let i = 0; i < num_list.length; i++){
        x *= num_list[i];
        square += num_list[i];
    }
    square = square * square
    
    return x < square ? 1 : 0
}
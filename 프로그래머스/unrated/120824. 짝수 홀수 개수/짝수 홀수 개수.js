function solution(num_list) {
    let even = [];
    let result = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even.push(num_list[i]);
        }
    }
    return result = [even.length, num_list.length - even.length]
}